import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppUpdateService } from './services/app-update.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSnackBarModule,
  ],
  providers: [
    AppUpdateService,
  ],
})
export class AppUpdateModule { }
