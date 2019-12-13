import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForecastContainerComponent } from './components/forecast-container/forecast-container.component';

const routes: Routes = [
  {
    path: '',
    component: ForecastContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForecastRoutingModule { }
