import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';

import { FORECAST_STATE_ID } from '../constants/forecast.constant';
import { Forecast } from '../models/forecast.interface';
import { ForecastCard } from '../models/forecast-card.interface';
import { ForecastUtils } from '../utils/forecast.utils';
import { State, adapter } from './forecast.state';

const selectForecastState = createFeatureSelector<State>(FORECAST_STATE_ID);

const { selectEntities } = adapter.getSelectors();
const selectForecastEntities = createSelector(
  selectForecastState,
  selectEntities,
);

export const selectForecastList = createSelector(
  selectForecastEntities,
  (forecastList: Dictionary<Forecast>): ForecastCard[] => Object.keys(forecastList)
    .map((id: string) => ForecastUtils.mapForecast2ForecastCard(forecastList[id]))
    .sort((a: ForecastCard, b: ForecastCard) => (a.forecastLocation.order - b.forecastLocation.order))
);
