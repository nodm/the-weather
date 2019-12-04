import { WeatherSummary } from './weather-summary.type';

export interface CurrentlyForecast {
  // The apparent (or “feels like”) temperature in degrees Fahrenheit.
  apparentTemperature: number;

  // The percentage of sky occluded by clouds, between 0 and 1, inclusive.
  cloudCover: number;

  // The relative humidity, between 0 and 1, inclusive.
  humidity: number;

  // A machine-readable text summary of this data point, suitable for selecting an icon for display.
  // If defined, this property will have one of the following values: clear-day, clear-night, rain,
  // snow, sleet, wind, fog, cloudy, partly-cloudy-day, or partly-cloudy-night.
  // (Developers should ensure that a sensible default is defined, as additional values, such as
  // hail, thunderstorm, or tornado, may be defined in the future.)
  icon?: WeatherSummary;

  // A human-readable text summary of this data point. (This property has millions of possible values,
  // so don’t use it for automated purposes: use the icon property, instead!)
  summary?: string;

  // The probability of precipitation occurring, between 0 and 1, inclusive.
  precipProbability?: number;

  // The type of precipitation occurring at the given time. If defined, this property will have one of
  // the following values: "rain", "snow", or "sleet" (which refers to each of freezing rain, ice pellets,
  // and “wintery mix”). (If precipIntensity is zero, then this property will not be defined. Additionally,
  // due to the lack of data in our sources, historical precipType information is usually estimated, rather
  // than observed.)
  precipType?: string;

  // The sea-level air pressure in millibars.
  pressure?: string;

  // The air temperature in degrees Fahrenheit.
  temperature: number;

  // The UNIX time at which this data point begins. minutely data point are always aligned to the top of the
  // minute, hourly data point objects to the top of the hour, daily data point objects to midnight of the
  // day, and currently data point object to the point of time provided all according to the local time zone.
  time: number;

  // The direction that the wind is coming from in degrees, with true north at 0° and progressing clockwise.
  // (If windSpeed is zero, then this value will not be defined.)
  windBearing?: number;

  // The wind speed in miles per hour.
  windSpeed?: number;

  // The UNIX time of when the sun will rise during a given day.
  sunriseTime?: number;

  // The UNIX time of when the sun will set during a given day.
  sunsetTime?: number;
}

