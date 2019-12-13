import { createAction, props } from '@ngrx/store';

import { ForecastLocation } from '~shared/models/forecast-location.interface';

export const initForecastLocation = createAction(
  '[Forecast Locations] Initialize',
);

export const addForecastLocation = createAction(
  '[Forecast Locations] Add forecast location',
  props<{ forecastLocation: ForecastLocation }>(),
);

export const addForecastLocations = createAction(
  '[Forecast Locations] Add forecast locations',
  props<{ forecastLocations: ForecastLocation[] }>(),
);
