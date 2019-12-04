import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { DailyForecast } from '../../models/daily-forecast.interface';

@Component({
  selector: 'app-forecast-short',
  templateUrl: './forecast-short.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForecastShortComponent {
  @Input() forecast: DailyForecast;
}
