import { Component, OnInit } from '@angular/core';

import { DailyForecast } from '../../models/daily-forecast.interface';
import { CurrentlyForecast } from '../../models/currently-forecast.interface';
import { Forecast } from '../../models/forecast.interface';
import { DarkSkyHttpService } from '../../services/dark-sky-http.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  public currentForecast: CurrentlyForecast;
  public dailyForecast: DailyForecast[];

  constructor(private darkSkyHttpService: DarkSkyHttpService) { }

  public ngOnInit(): void {
    this.darkSkyHttpService.fetchForecast()
      .subscribe((forecast: Forecast) => {
        const [ current = {}, ...daily ] = forecast.daily.data;
        this.currentForecast = {
          ...current,
          ...forecast.currently,
        };
        this.dailyForecast = daily;
      });
  }
}
