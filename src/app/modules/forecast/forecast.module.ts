import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ForecastRoutingModule } from './forecast-routing.module';
import { ForecastComponent } from './components/forecast/forecast.component';
import { ForecastContainerComponent } from './components/forecast-container/forecast-container.component';
import { ForecastDetailedComponent } from './components/forecast-detailed/forecast-detailed.component';
import { ForecastShortComponent } from './components/forecast-short/forecast-short.component';
import { ForecastPlaceholderComponent } from './components/forecast-placeholder/forecast-placeholder.component';
import { WeatherIconComponent } from './components/weather-icon/weather-icon.component';
import { FORECAST_STATE_ID } from './constants/forecast.constant';
import { DarkSkyHttpService } from './services/dark-sky-http.service';
import { GeoLocationService } from './services/geo-location.service';
import { reducer, ForecastEffects } from './store';

@NgModule({
  declarations: [
    ForecastContainerComponent,
    ForecastComponent,
    ForecastDetailedComponent,
    ForecastShortComponent,
    ForecastPlaceholderComponent,
    WeatherIconComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatSnackBarModule,
    MatTooltipModule,
    StoreModule.forFeature(FORECAST_STATE_ID, reducer),
    EffectsModule.forFeature([ForecastEffects]),
    ForecastRoutingModule,
  ],
  providers: [
    DarkSkyHttpService,
    GeoLocationService,
  ],
})
export class ForecastModule { }
