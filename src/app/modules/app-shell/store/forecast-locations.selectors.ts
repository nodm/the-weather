import { createFeatureSelector, createSelector } from '@ngrx/store';

import { FORECAST_LOCATIONS_STATE_ID } from '../constants/forecast-locations.constant';
import { State, adapter } from './forecast-locations.state';

const selectForecastLocationsState = createFeatureSelector<State>(FORECAST_LOCATIONS_STATE_ID);

const { selectAll, selectEntities  } = adapter.getSelectors();

export const selectForecastLocationEntities = createSelector(
  selectForecastLocationsState,
  selectEntities,
);

export const selectForecastLocationList = createSelector(
  selectForecastLocationsState,
  selectAll,
);
