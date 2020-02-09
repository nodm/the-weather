import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { selectForecast, State, loadForecast } from '../store';
import { ForecastCard } from '../models';

@Injectable()
export class ForecastFacade {
  public forecastCard$: Observable<ForecastCard> = this.store.select(selectForecast);

  constructor(private store: Store<State>) {}

  public loadForecast(locationId: string) {
    this.store.dispatch(loadForecast({ locationId }));
  }
}
