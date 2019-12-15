import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutes } from '~shared/constants/app-routes';
import { HomeComponent } from '~modules/app-shell';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  }, {
    path: AppRoutes.forecast,
    loadChildren: () => import ('./modules/forecast/forecast.module').then(m => m.ForecastModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
