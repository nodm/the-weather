import { GeoLocation } from './geo-location.interface';

export interface ShortForecast {
  time: number;
  icon: string;
  summary: string;
  temperatureHigh: number;
  temperatureLow: number;
}

export interface DetailedForecast {
  time: number;
  summary: string;
  icon: string;
  temperature: number;
  humidity: number;
  windSpeed: number;
  windBearing: number;
  sunriseTime: number;
  sunsetTime: number;
}

export interface ForecastCard {
  geoLocation: GeoLocation;
  currently: DetailedForecast;
  daily: ShortForecast[];
}
