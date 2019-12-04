import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { CurrentlyForecast } from '../../models/currently-forecast.interface';

@Component({
  selector: 'app-forecast-detailed',
  templateUrl: './forecast-detailed.component.html',
  styleUrls: ['./forecast-detailed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForecastDetailedComponent {
  @Input() forecast: CurrentlyForecast;
}
