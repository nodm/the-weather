import { LocationUtils } from '~shared/utils/location.utils';
import { ForecastLocation } from '~shared/models/forecast-location.interface';

export const FORECAST_LOCATIONS_STATE_ID = 'forecast-locations';

export const CURRENT_LOCATION_NAME = 'Current location';

export const FORECAST_LOCATION_LIST: ForecastLocation[] = [
  {
    name: 'Kyiv',
    order: 1,
    latitude: 50.450,
    longitude: 30.524,
  }, {
    name: 'Warsaw',
    order: 2,
    latitude: 52.233,
    longitude: 21.017,
  },
  {
    name: 'København',
    order: 3,
    latitude: 55.676,
    longitude: 12.568,
  },
  {
    name: 'Oslo',
    order: 4,
    latitude: 59.917,
    longitude: 10.733,
  },
  {
    name: 'Stockholm',
    order: 5,
    latitude: 59.329,
    longitude: 18.069,
  },
  {
    name: 'Malmö',
    order: 6,
    latitude: 55.606,
    longitude: 13.036,
  },
  {
    name: 'Göteborg',
    order: 7,
    latitude: 57.7,
    longitude: 11.967,
  },
].map(forecastLocation => ({ id: LocationUtils.getId(forecastLocation), ...forecastLocation }));

export const COORDINATE_PRECISION = 3;
