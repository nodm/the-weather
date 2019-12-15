import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificationManagementComponent } from './components/notification-management/notification-management.component';

const routes: Routes = [
  {
    path: '',
    component: NotificationManagementComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationManagementRoutingModule { }
