import { Action, createReducer, on } from '@ngrx/store';

import { addForecastLocation, addForecastLocations } from './forecast-locations.actions';
import { initialState, State, adapter } from './forecast-locations.state';

const forecastLocationsReducer = createReducer(
  initialState,

  on(addForecastLocation, (state, { forecastLocation }) => {
    return adapter.upsertOne(forecastLocation, state);
  }),

  on(addForecastLocations, (state, { forecastLocations }) => {
    return adapter.upsertMany(forecastLocations, state);
  }),
);

export function reducer(state: State | undefined, action: Action) {
  return forecastLocationsReducer(state, action);
}
