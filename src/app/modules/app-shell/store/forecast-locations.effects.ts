import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { merge, of, EMPTY } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';

import { LocationUtils } from '~shared/utils/location.utils';
import { initForecastLocation, addForecastLocations, addForecastLocation } from './forecast-locations.actions';
import { FORECAST_LOCATION_LIST, COORDINATE_PRECISION, CURRENT_LOCATION_NAME } from '../constants/forecast-locations.constant';
import { GeoLocationService } from '../services/geo-location.service';

@Injectable()
export class ForecastLocationsEffects {
  constructor(
    private actions$: Actions,
    private snackBar: MatSnackBar,
    private geoLocationService: GeoLocationService,
  ) {}

  public initForecastLocation$ = createEffect(() => this.actions$.pipe(
    ofType(initForecastLocation),
    switchMap(() => {
      const addCurrentLocation$ = this.geoLocationService.getCurrentPosition().pipe(
        map((position: Position) => {
          const latitude = LocationUtils.round(position.coords.latitude, COORDINATE_PRECISION);
          const longitude = LocationUtils.round(position.coords.longitude, COORDINATE_PRECISION);
          const id = LocationUtils.getId({ latitude, longitude });

          const forecastLocation = {
            id,
            name: CURRENT_LOCATION_NAME,
            order: 0,
            latitude,
            longitude,
          };

          return addForecastLocation({ forecastLocation });
        }),
        catchError(() => EMPTY),
      );

      return merge(addCurrentLocation$, of(addForecastLocations({ forecastLocations: FORECAST_LOCATION_LIST })));
    }),
  ));
}
