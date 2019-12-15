import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { ForecastCard } from '../../models/forecast-card.interface';
import { State, selectForecast, loadForecast } from '../../store';

@Component({
  selector: 'app-forecast-container',
  templateUrl: './forecast-container.component.html',
  styleUrls: ['./forecast-container.component.scss']
})
export class ForecastContainerComponent {
  public forecastCard$: Observable<ForecastCard> = this.activatedRoute.params.pipe(
    tap(({ id }) => this.store.dispatch(loadForecast({ locationId: id }))),
    switchMap(({ id }) => this.store.select(selectForecast, { id })),
  );

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<State>,
  ) { }
}
