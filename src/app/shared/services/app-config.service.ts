import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppConfigService {
  // @ts-ignore
  private readonly config = window.appConfig;

  public get buildNumber(): string {
    return `build ${this.config.buildNumber || '#'}`;
  }

  public get darkSkyApiKey(): string {
    return this.config.darkSkyApiKey === '%DARK_SKY_API_KEY%' ? '<YOUR_DARK_SKY_API_KEY>' : this.config.darkSkyApiKey;
  }

  public get vapidPublicKey(): string {
    return this.config.vapidPublicKey === '%VAPID_PUBLIC_KEY%' ? '<YOUR_VAPID_PUBLIC_KEY>' : this.config.vapidPublicKey;
  }
}
