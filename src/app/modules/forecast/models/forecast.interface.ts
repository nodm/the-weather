import { CurrentForecast } from './current-forecast.interface';
import { DailyForecast } from './daily-forecast.interface';
import { WeatherSummary } from './weather-summary.type';
import { GeoLocation } from './geo-location.interface';

export interface Forecast {
  geoLocation: GeoLocation;
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
