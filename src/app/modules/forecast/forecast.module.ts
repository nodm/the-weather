import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ForecastRoutingModule } from './forecast-routing.module';
import {
  ForecastComponent,
  ForecastContainerComponent,
  ForecastDetailedComponent,
  ForecastPlaceholderComponent,
  ForecastShortComponent,
  WeatherIconComponent,
} from './components';
import { FORECAST_STATE_ID } from './constants';
import { ForecastFacade } from './facades/forecast-facade';
import { DarkSkyHttpService, GeoLocationService } from './services';
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
    ForecastFacade,
    DarkSkyHttpService,
    GeoLocationService,
  ],
})
export class ForecastModule { }
