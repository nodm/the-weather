import { ForecastLocation } from '~shared/models';
import { Forecast } from '../models';

export interface State {
  payload: {
    forecastLocation: ForecastLocation,
    forecast: Forecast,
  };
}

export const initialState: State = {
  payload: null,
};
