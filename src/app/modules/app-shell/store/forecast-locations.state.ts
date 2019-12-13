import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { ForecastLocation } from '~shared/models/forecast-location.interface';

export interface State extends EntityState<ForecastLocation> {}

export const adapter: EntityAdapter<ForecastLocation> = createEntityAdapter<ForecastLocation>({
  sortComparer: (a: ForecastLocation, b: ForecastLocation) => (a.order - b.order),
});

export const initialState: State = adapter.getInitialState();
