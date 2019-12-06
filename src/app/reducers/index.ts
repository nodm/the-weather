import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from '~env/environment';

export interface State {
  [key: string]: any;
}

export const reducers: ActionReducerMap<State> = {};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
