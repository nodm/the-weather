import { ForecastLocation } from '~shared/models/forecast-location.interface';
import { WeatherSummary } from './weather-summary.type';

export interface ShortForecast {
  time: number;
  icon: WeatherSummary;
  summary: string;
  temperatureHigh: number;
  temperatureLow: number;
}

export interface DetailedForecast {
  time: number;
  summary: string;
  icon: WeatherSummary;
  temperature: number;
  humidity: number;
  windSpeed: number;
  windBearing: number;
  sunriseTime: number;
  sunsetTime: number;
}

export interface ForecastCard {
  forecastLocation: ForecastLocation;
  currently: DetailedForecast;
  daily: ShortForecast[];
}
