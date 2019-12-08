import { Injectable } from '@angular/core';
import { SwUpdate, UpdateAvailableEvent } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material';

import { INSTALL_UPDATE_SNACKBAR_DURATION } from '../constants/app-update.constants';

@Injectable()
export class AppUpdateService {
  constructor(
    private swUpdate: SwUpdate,
    private snackBar: MatSnackBar,
  ) {
    if (swUpdate.isEnabled) {
      this.swUpdate.available.subscribe((updateAvailableEvent: UpdateAvailableEvent) => {
        const snackBarRef = this.snackBar.open(
          'A new application version is available',
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
  }
}
