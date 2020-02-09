import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, tap, switchMap } from 'rxjs/operators';

import { selectForecastLocationEntities } from '~modules/app-shell';
import { ERROR_SNACKBAR_DURATION } from '../constants';
import { Forecast } from '../models';
import { DarkSkyHttpService } from '../services';
import {
  loadForecast,
  fetchForecast,
  fetchForecastSuccess,
  fetchForecastError,
} from './forecast.actions';
import { State } from './forecast.state';

@Injectable()
export class ForecastEffects {
  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<State>,
    private actions$: Actions,
    private snackBar: MatSnackBar,
    private darkSkyHttpService: DarkSkyHttpService,
  ) {}

  public loadForecast$ = createEffect(() => this.actions$.pipe(
    ofType(loadForecast),
    switchMap((action) => this.store.select(selectForecastLocationEntities).pipe(
      map((forecastLocationEntities) => {
        const forecastLocation = forecastLocationEntities[action.locationId];
        return fetchForecast({ forecastLocation });
      })
    ))
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
