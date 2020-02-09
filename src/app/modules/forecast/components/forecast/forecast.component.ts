import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { ForecastCard } from '../../models';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForecastComponent {
  @Input() forecastCard: ForecastCard;
}
