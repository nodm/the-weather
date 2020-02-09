import { createFeatureSelector, createSelector } from '@ngrx/store';

import { FORECAST_STATE_ID } from '../constants';
import { ForecastCard } from '../models';
import { State } from './forecast.state';
import { ForecastUtils } from '../utils/forecast.utils';

const selectForecastState = createFeatureSelector<State>(FORECAST_STATE_ID);

const selectForecastPayload = createSelector(
  selectForecastState,
  (state: State) => state.payload,
);

export const selectForecast = createSelector(
  selectForecastPayload,
  (payload): ForecastCard => {
    return payload ? ForecastUtils.mapForecast2ForecastCard(payload.forecast) : null;
  }
);
