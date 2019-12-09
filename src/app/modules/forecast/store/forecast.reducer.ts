import { Action, createReducer, on } from '@ngrx/store';

import { fetchForecastSuccess } from './forecast.actions';
import { initialState, State, adapter } from './forecast.state';

const forecastReducer = createReducer(
  initialState,
  on(fetchForecastSuccess, (state, { forecastLocation, forecast }) => {
    return adapter.upsertOne({ ...forecast, forecastLocation }, state);
  }),
);

export function reducer(state: State | undefined, action: Action) {
  return forecastReducer(state, action);
}
