import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';

import { ForecastRoutingModule } from './forecast-routing.module';
import { ForecastComponent } from './components/forecast/forecast.component';
import { ForecastDetailedComponent } from './components/forecast-detailed/forecast-detailed.component';
import { ForecastShortComponent } from './components/forecast-short/forecast-short.component';
import { WeatherIconComponent } from './components/weather-icon/weather-icon.component';
import { PlaceholderDirective } from './directives/placeholder.directive';
import { DarkSkyHttpService } from './services/dark-sky-http.service';

@NgModule({
  declarations: [
    ForecastComponent,
    ForecastDetailedComponent,
    ForecastShortComponent,
    WeatherIconComponent,
    PlaceholderDirective,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatTooltipModule,
    ForecastRoutingModule,
  ],
  providers: [
    DarkSkyHttpService,
  ],
})
export class ForecastModule { }
