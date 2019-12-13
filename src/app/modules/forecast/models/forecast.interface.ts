import { ForecastLocation } from '~shared/models/forecast-location.interface';
import { CurrentForecast } from './current-forecast.interface';
import { DailyForecast } from './daily-forecast.interface';
import { WeatherSummary } from './weather-summary.type';

export interface Forecast {
  forecastLocation: ForecastLocation;
  currently: CurrentForecast;
  daily: {
    data: DailyForecast[];
    icon: WeatherSummary;
    summary: string;
  };
  latitude: number;
  longitude: number;
  offset: number;
  timezone: string;
}
