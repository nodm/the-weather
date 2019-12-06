import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForecastListComponent } from './components/forecast-list/forecast-list.component';

const routes: Routes = [
  {
    path: '',
    component: ForecastListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForecastRoutingModule { }
