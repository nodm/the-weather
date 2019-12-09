import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State, loadForecast, selectForecastList } from '../../store';
import { ForecastCard } from '../../models/forecast-card.interface';
import { FORECAST_LOCATION_LIST } from '../../constants/forecast.constant';

@Component({
  selector: 'app-forecast-list',
  templateUrl: './forecast-list.component.html',
  styleUrls: ['./forecast-list.component.scss']
})
export class ForecastListComponent implements OnInit {
  public forecastCardList$: Observable<ForecastCard[]> = this.store.select(selectForecastList);

  constructor(private store: Store<State>) { }

  public ngOnInit(): void {
    this.store.dispatch(loadForecast({ forecastLocation: FORECAST_LOCATION_LIST }));
  }

  public getForecastId(index: number, item: ForecastCard): string {
    return `${item.forecastLocation.latitude}:${item.forecastLocation.longitude}`;
  }
}
