import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DARK_SKY_API, DARK_SKY_API_KEY } from '../constants/dark-sky.constant';
import { Forecast } from '../models/forecast.interface';
import { GeoLocation } from '../models/geo-location.interface';

@Injectable()
export class DarkSkyHttpService {
  constructor(private httpClient: HttpClient) {}

  public fetchForecast(geoLocation: GeoLocation): Observable<Forecast> {
    const { latitude, longitude } = geoLocation;
    const coordinates = [latitude, longitude].join(',');
    const url = [DARK_SKY_API, DARK_SKY_API_KEY, coordinates].join('/');
    const params = new HttpParams()
      .set('exclude', 'minutely,hourly,alerts,flags')
      .set('units', 'si');

    return this.httpClient.get<Forecast>(url, { params });
  }
}
