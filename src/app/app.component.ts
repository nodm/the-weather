import { Component } from '@angular/core';

import { AppUpdateService } from '~modules/app-update/services/app-update.service';

@Component({
  selector: 'app-root',
  template: `
    <app-shell>
        <router-outlet></router-outlet>
    </app-shell>
   `,
})
export class AppComponent {
  constructor(private appUpdateService: AppUpdateService) { }
}
