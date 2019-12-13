import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { Forecast } from '../models/forecast.interface';

export interface State extends EntityState<Forecast> {}

export const adapter: EntityAdapter<Forecast> = createEntityAdapter<Forecast>({
  selectId: (forecast) => forecast.forecastLocation.id,
});

export const initialState: State = adapter.getInitialState();
