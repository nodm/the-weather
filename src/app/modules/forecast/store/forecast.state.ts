import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { Forecast } from '../models/forecast.interface';

export interface State extends EntityState<Forecast> {}

export const adapter: EntityAdapter<Forecast> = createEntityAdapter<Forecast>({
  selectId: (forecast: Forecast): string => `${forecast.latitude},${forecast.longitude}`,
});

export const initialState: State = adapter.getInitialState();
