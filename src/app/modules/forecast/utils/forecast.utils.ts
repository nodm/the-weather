import { Forecast } from '../models/forecast.interface';
import { DetailedForecast, ForecastCard, ShortForecast } from '../models/forecast-card.interface';
import { DailyForecast } from '../models/daily-forecast.interface';

export const ForecastUtils = {
  mapForecast2ForecastCard: (forecast: Forecast): ForecastCard => {
    const forecastLocation = forecast.forecastLocation;

    const [ current, ...dailyList ] = forecast.daily.data;

    const currently: DetailedForecast = {
      time: forecast.currently.time,
      summary: forecast.currently.summary,
      icon: forecast.currently.icon,
      temperature: forecast.currently.temperature,
      humidity: forecast.currently.humidity,
      windSpeed: forecast.currently.windSpeed,
      windBearing: forecast.currently.windBearing,
      sunriseTime: current.sunriseTime,
      sunsetTime: current.sunsetTime,
    };

    const daily: ShortForecast[] = dailyList.map((dailyForecast: DailyForecast) => ({
      time: dailyForecast.time,
      icon: dailyForecast.icon,
      summary: dailyForecast.summary,
      temperatureHigh: dailyForecast.temperatureHigh,
      temperatureLow: dailyForecast.temperatureLow,
    }));

    return { forecastLocation, currently, daily };
  },
};
