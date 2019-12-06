import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { ShortForecast } from '../../models/forecast-card.interface';

@Component({
  selector: 'app-forecast-short',
  templateUrl: './forecast-short.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForecastShortComponent {
  @Input() forecast: ShortForecast;
}
