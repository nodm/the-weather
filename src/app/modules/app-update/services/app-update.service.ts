import { ApplicationRef, Injectable } from '@angular/core';
import { SwUpdate, UpdateAvailableEvent } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material/snack-bar';
import { concat, interval } from 'rxjs';
import { first } from 'rxjs/operators';

import { INSTALL_UPDATE_SNACKBAR_DURATION, NEW_VERSION_ACTIVATED_SNACKBAR_DURATION } from '../constants/app-update.constants';

@Injectable()
export class AppUpdateService {
  constructor(
    private appRef: ApplicationRef,
    private swUpdate: SwUpdate,
    private snackBar: MatSnackBar,
  ) {
    if (swUpdate.isEnabled) {
      this.createNewVersionAvailableSubscription();
      this.createNewVersionActivatedSubscription();
      this.createUpdateCheckerScheduler();
    }
  }

  private createNewVersionAvailableSubscription() {
    this.swUpdate.available.subscribe((updateAvailableEvent: UpdateAvailableEvent) => {
      const newVersionData = updateAvailableEvent.available.appData as { version: string, whatsNew: string };
      const snackBarRef = this.snackBar.open(
        `Version ${newVersionData.version} is available. Updates:${newVersionData.whatsNew}`,
        'INSTALL',
        { duration: INSTALL_UPDATE_SNACKBAR_DURATION }
      );

      snackBarRef.onAction().subscribe(() => {
        this.swUpdate.activateUpdate().then(() => {
          window.location.reload();
        });
      });
    });
  }

  private createNewVersionActivatedSubscription() {
    this.swUpdate.activated.subscribe(event => {
      this.snackBar.open(
        `A new application version is activated (${event.current})`,
        'OK',
        { duration: NEW_VERSION_ACTIVATED_SNACKBAR_DURATION }
      );
    });
  }

  private createUpdateCheckerScheduler() {
    const appIsStable$ = this.appRef.isStable.pipe(first(isStable => isStable === true));
    const everyHour$ = interval(60 * 60 * 1000);
    const everySixHoursOnceAppIsStable$ = concat(appIsStable$, everyHour$);

    everySixHoursOnceAppIsStable$.subscribe(() => this.swUpdate.checkForUpdate());
  }
}
