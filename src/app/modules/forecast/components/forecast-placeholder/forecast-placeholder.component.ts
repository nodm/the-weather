import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-forecast-placeholder',
  templateUrl: './forecast-placeholder.component.html',
  styleUrls: ['./forecast-placeholder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForecastPlaceholderComponent { }
