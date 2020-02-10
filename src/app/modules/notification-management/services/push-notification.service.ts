import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SwPush } from '@angular/service-worker';

import { AppConfigService } from '~shared/services/app-config.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class PushNotificationService {
  constructor(
    private httpClient: HttpClient,
    private swPush: SwPush,
    private router: Router,
    private apiConfigService: AppConfigService,
    private snackBar: MatSnackBar,
  ) {
    this.swPush.notificationClicks.subscribe(this.onNotificationClick.bind(this));
  }

  public requestSubscriptionToPush(): Promise<boolean> {
    if (!this.swPush.isEnabled) {
      return Promise.resolve(false);
    }

    return this.swPush.requestSubscription({ serverPublicKey: this.apiConfigService.vapidPublicKey })
      .then((subscription: PushSubscription) => this.registerSubscription(subscription))
      .catch(() => false);
  }

  public send(message?: string): void {
    this.httpClient.post('/api/send', { message } || null).subscribe(
      () => this.snackBar.open('Push message sent successfully.', 'Ok', { duration: 3000 }),
      (err) => this.snackBar.open(`Error: ${err.message}`, 'Ok'),
    );
  }

  private registerSubscription(subscription: PushSubscription): Promise<boolean> {
    return this.httpClient.post('/api/subscribe', subscription).toPromise()
      .then(() => true)
      .catch(() => false);
  }

  private onNotificationClick(event: { action: string, notification: NotificationOptions & { title: string }}) {
    switch (event.action) {
      case 'show_forecast_warsaw':
        this.router.navigate(['/forecast', '52-233-21-017']);
        break;
      case 'show_forecast_kyiv':
        this.router.navigate(['/forecast', '50-45-30-524']);
    }
  }
}
