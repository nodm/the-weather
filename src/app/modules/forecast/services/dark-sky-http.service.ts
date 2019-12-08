import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AppConfig } from '~shared/services/app-config';
import { DARK_SKY_API } from '../constants/dark-sky.constant';
import { Forecast } from '../models/forecast.interface';
import { GeoLocation } from '../models/geo-location.interface';

@Injectable()
export class DarkSkyHttpService {
  constructor(
    private httpClient: HttpClient,
    private appConfig: AppConfig,
  ) {}

  public fetchForecast(geoLocation: GeoLocation): Observable<Forecast> {
    const { latitude, longitude } = geoLocation;
    const coordinates = [latitude, longitude].join(',');
    const url = [DARK_SKY_API, this.appConfig.darkSkyApiKey, coordinates].join('/');
    const params = new HttpParams()
      .set('exclude', 'minutely,hourly,alerts,flags')
      .set('units', 'si');

    return this.httpClient.get<Forecast>(url, { params });
  }
}
