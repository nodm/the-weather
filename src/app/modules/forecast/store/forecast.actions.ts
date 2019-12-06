import { createAction, props } from '@ngrx/store';

import { Forecast } from '../models/forecast.interface';
import { GeoLocation } from '../models/geo-location.interface';

export const loadForecast = createAction(
  '[Forecast] Load forecasts',
  props<{ geoLocation: GeoLocation | GeoLocation[] }>(),
);

export const fetchForecast = createAction(
  '[Forecast effect] Fetch forecast',
  props<{ geoLocation: GeoLocation }>()
);

export const fetchForecastSuccess = createAction(
  '[Forecast effect] Fetch forecast success',
  props<{ geoLocation: GeoLocation, forecast: Forecast }>()
);

export const fetchForecastError = createAction(
  '[Forecast effect] Fetch forecast error',
  props<{ error: Error }>()
);
