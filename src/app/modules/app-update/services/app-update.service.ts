import { Injectable } from '@angular/core';
import { SwUpdate, UpdateAvailableEvent } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class AppUpdateService {
  constructor(
    private swUpdate: SwUpdate,
    private snackBar: MatSnackBar,
  ) {
    if (swUpdate.isEnabled) {
      this.swUpdate.available.subscribe((updateAvailableEvent: UpdateAvailableEvent) => {
        const snackBarRef = this.snackBar.open('A new application version is available', 'INSTALL', { duration: 10000 });

        snackBarRef.onAction().subscribe(() => {
          this.swUpdate.activateUpdate().then(() => {
            window.location.reload();
          });
        });
      });
    }
  }
}
