import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { PushNotificationService } from '../../services/push-notification.service';

@Component({
  selector: 'app-notification-management',
  templateUrl: './notification-management.component.html',
  styleUrls: ['./notification-management.component.scss']
})
export class NotificationManagementComponent implements OnInit {
  public isNotificationsEnabled = false;
  public notificationForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private pushNotificationService: PushNotificationService,
  ) { }

  public ngOnInit(): void {
    this.notificationForm = this.formBuilder.group({
      message: this.formBuilder.control(''),
    });

    this.pushNotificationService.requestSubscriptionToPush()
      .then((isEnable) => {
        this.isNotificationsEnabled = isEnable;
      });
  }

  public onSubmit() {
    const { message } = this.notificationForm.value;
    this.pushNotificationService.send(message);
  }
}
