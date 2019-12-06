import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';

import { Forecast } from '../models/forecast.interface';
import { GeoLocation } from '../models/geo-location.interface';
import { DarkSkyHttpService } from '../services/dark-sky-http.service';
import {
  loadForecast,
  fetchForecast,
  fetchForecastSuccess,
  fetchForecastError,
} from './forecast.actions';

@Injectable()
export class ForecastEffects {
  constructor(
    private actions$: Actions,
    private darkSkyHttpService: DarkSkyHttpService,
  ) {}

  public loadForecast$ = createEffect(() => this.actions$.pipe(
    ofType(loadForecast),
    switchMap((action) => {
      const geoLocationList = Array.isArray(action.geoLocation) ? action.geoLocation : [action.geoLocation];
      const fetchForecastList = geoLocationList.map((geoLocation: GeoLocation) => fetchForecast({ geoLocation }));

      return of(...fetchForecastList);
    }),
  ));

  public fetchForecast$ = createEffect(() => this.actions$.pipe(
    ofType(fetchForecast),
    mergeMap(action => this.darkSkyHttpService.fetchForecast(action.geoLocation).pipe(
      map((forecast: Forecast) => fetchForecastSuccess({ geoLocation: action.geoLocation, forecast })),
      catchError((error: Error) => of(fetchForecastError({ error }))),
    )),
  ));
}
