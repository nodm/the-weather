import { CurrentForecast } from './current-forecast.interface';
import { DailyForecast } from './daily-forecast.interface';
import { WeatherSummary } from './weather-summary.type';
import { ForecastLocation } from './geo-location.interface';

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
