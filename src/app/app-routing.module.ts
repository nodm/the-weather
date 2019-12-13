import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutes } from '~shared/constants/app-routes';

const routes: Routes = [
  {
    path: AppRoutes.forecast,
    loadChildren: () => import ('./modules/forecast/forecast.module').then(m => m.ForecastModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
