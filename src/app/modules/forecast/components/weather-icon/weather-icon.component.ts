import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { WeatherSummary } from '../../models/weather-summary.type';

@Component({
  selector: 'app-weather-icon',
  template: `<img class="icon" [src]="imageSource" [alt]="summary">`,
  styleUrls: ['./weather-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherIconComponent {
  @Input() name: WeatherSummary;
  @Input() summary: string;

  public get imageSource(): string {
    return `assets/images/${this.name}.svg`;
  }
}
