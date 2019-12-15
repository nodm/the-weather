import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';


import { NotificationManagementRoutingModule } from './notification-management.routing.module';
import { NotificationManagementComponent } from './components/notification-management/notification-management.component';
import { PushNotificationService } from './services/push-notification.service';

@NgModule({
  declarations: [NotificationManagementComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    NotificationManagementRoutingModule,
  ],
  providers: [
    PushNotificationService,
  ],
})
export class NotificationManagementModule { }
