import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { ForecastCard } from '../../models/forecast-card.interface';
import { State, selectForecast } from '../../store';

@Component({
  selector: 'app-forecast-container',
  templateUrl: './forecast-container.component.html',
  styleUrls: ['./forecast-container.component.scss']
})
export class ForecastContainerComponent {
  public forecastCard$: Observable<ForecastCard> = this.activatedRoute.queryParams.pipe(
    switchMap(({ latitude, longitude }) => this.store.select(selectForecast, { latitude, longitude })),
  );

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<State>,
  ) { }
}
