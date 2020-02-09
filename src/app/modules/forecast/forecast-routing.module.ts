import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForecastContainerComponent } from './components';
import { ForecastGuard } from './guards/forecast.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: ':locationId',
        component: ForecastContainerComponent,
        canActivate: [ForecastGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ForecastGuard],
})
export class ForecastRoutingModule { }
