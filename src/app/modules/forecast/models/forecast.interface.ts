import { CurrentlyForecast } from './currently-forecast.interface';
import { DailyForecast } from './daily-forecast.interface';
import { WeatherSummary } from './weather-summary.type';

export interface Forecast {
  currently: CurrentlyForecast;
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
