import { createAction, props } from '@ngrx/store';

import { Forecast } from '../models/forecast.interface';
import { ForecastLocation } from '../models/geo-location.interface';

export const loadForecast = createAction(
  '[Forecast] Load forecasts',
  props<{ forecastLocation: ForecastLocation | ForecastLocation[] }>(),
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
  props<{ error: Error }>()
);
