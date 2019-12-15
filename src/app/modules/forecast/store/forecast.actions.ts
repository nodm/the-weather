import { createAction, props } from '@ngrx/store';

import { ForecastLocation } from '~shared/models/forecast-location.interface';
import { Forecast } from '../models/forecast.interface';

export const loadForecast = createAction(
  '[Forecast effect] Load forecast',
  props<{ locationId: string }>()
);

export const fetchForecast = createAction(
  '[Forecast effect] Fetch forecast',
  props<{ forecastLocation: ForecastLocation }>()
);

export const fetchForecastSuccess = createAction(
  '[Forecast effect] Fetch forecast success',
  props<{ forecastLocation: ForecastLocation, forecast: Forecast }>()
);

export const fetchForecastError = createAction(
  '[Forecast effect] Fetch forecast error',
  props<{ forecastLocation: ForecastLocation, error: Error }>()
);
