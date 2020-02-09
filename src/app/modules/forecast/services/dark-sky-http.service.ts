import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AppConfigService } from '~shared/services/app-config.service';
import { ForecastLocation } from '~shared/models';
import { DARK_SKY_API } from '../constants';
import { Forecast } from '../models';

@Injectable()
export class DarkSkyHttpService {
  constructor(
    private httpClient: HttpClient,
    private appConfigService: AppConfigService,
  ) {}

  public fetchForecast(forecastLocation: ForecastLocation): Observable<Forecast> {
    const { latitude, longitude } = forecastLocation;
    const coordinates = [latitude, longitude].join(',');
    const url = [DARK_SKY_API, this.appConfigService.darkSkyApiKey, coordinates].join('/');
    const params = new HttpParams()
      .set('exclude', 'minutely,hourly,alerts,flags')
      .set('units', 'si');

    return this.httpClient.get<Forecast>(url, { params });
  }
}
