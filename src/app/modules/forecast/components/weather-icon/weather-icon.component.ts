import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { WeatherSummary } from '../../models/weather-summary.type';

@Component({
  selector: 'app-weather-icon',
  // template: '<div [class]="classes"></div>',
  template: '<img class="icon" [src]="imageSource" alt="">',
  styleUrls: ['./weather-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherIconComponent {
  @Input() name: WeatherSummary;

  public get imageSource(): string {
    return `assets/images/${this.name}.svg`;
  }

  public get classes(): string {
    return `icon icon--${this.name}`;
  }
}
