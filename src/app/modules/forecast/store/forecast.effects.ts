import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { merge, Observable, of } from 'rxjs';
import { map, mergeMap, catchError, switchMap, filter, tap } from 'rxjs/operators';

import { Forecast } from '../models/forecast.interface';
import { ForecastLocation } from '../models/geo-location.interface';
import { DarkSkyHttpService } from '../services/dark-sky-http.service';
import { GeoLocationService } from '../services/geo-location.service';
import {
  loadForecast,
  fetchForecast,
  fetchForecastSuccess,
  fetchForecastError,
} from './forecast.actions';
import { ForecastUtils } from '../utils/forecast.utils';
import { COORDINATE_PRECISION, ERROR_SNACKBAR_DURATION } from '../constants/forecast.constant';

@Injectable()
export class ForecastEffects {
  constructor(
    private actions$: Actions,
    private snackBar: MatSnackBar,
    private darkSkyHttpService: DarkSkyHttpService,
    private geoLocationService: GeoLocationService,
  ) {}

  public loadForecast$ = createEffect(() => this.actions$.pipe(
    ofType(loadForecast),
    switchMap((action) => {
      const currentLocation$: Observable<ForecastLocation> = this.geoLocationService.getCurrentPosition().pipe(
        map((position: Position) => ({
          name: 'Current location',
          order: 0,
          latitude: ForecastUtils.round(position.coords.latitude, COORDINATE_PRECISION),
          longitude: ForecastUtils.round(position.coords.longitude, COORDINATE_PRECISION),
        })),
        catchError(() => of(null)),
      );

      const geoLocationList = Array.isArray(action.forecastLocation) ? action.forecastLocation : [action.forecastLocation];

      return merge(of(...geoLocationList), currentLocation$).pipe(
        filter(Boolean),
        map((geoLocation: ForecastLocation) => fetchForecast({ forecastLocation: geoLocation }))
      );
    }),
  ));

  public fetchForecast$ = createEffect(() => this.actions$.pipe(
    ofType(fetchForecast),
    mergeMap(action => this.darkSkyHttpService.fetchForecast(action.forecastLocation).pipe(
      map((forecast: Forecast) => fetchForecastSuccess({ forecastLocation: action.forecastLocation, forecast })),
      catchError((error: Error) => of(fetchForecastError({ forecastLocation: action.forecastLocation, error }))),
    )),
  ));

  public fetchForecastError$ = createEffect(() => this.actions$.pipe(
    ofType(fetchForecastError),
    tap((action) => {
      this.snackBar.open(
        `Error fetching forecast data for ${action.forecastLocation.name}`,
        'OK',
        { duration: ERROR_SNACKBAR_DURATION }
      );
    }),
  ), { dispatch: false });
}
