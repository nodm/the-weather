import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { DetailedForecast } from '../../models';

@Component({
  selector: 'app-forecast-detailed',
  templateUrl: './forecast-detailed.component.html',
  styleUrls: ['./forecast-detailed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForecastDetailedComponent {
  @Input() forecast: DetailedForecast;
}
