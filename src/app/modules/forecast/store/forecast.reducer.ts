import { Action, createReducer, on } from '@ngrx/store';

import { fetchForecastSuccess, cleanForecastState } from './forecast.actions';
import { initialState, State } from './forecast.state';

const forecastReducer = createReducer(
  initialState,

  on(fetchForecastSuccess, (state, payload) => ({
    ...state,
    payload,
  })),

  on(cleanForecastState, () => initialState),
);

export function reducer(state: State | undefined, action: Action) {
  return forecastReducer(state, action);
}
