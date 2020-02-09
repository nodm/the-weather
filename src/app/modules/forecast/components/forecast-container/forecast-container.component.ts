import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ForecastFacade } from '../../facades/forecast-facade';

@Component({
  selector: 'app-forecast-container',
  templateUrl: './forecast-container.component.html',
  styleUrls: ['./forecast-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForecastContainerComponent {
  public forecastCard$ = this.forecastFacade.forecastCard$;

  constructor(private forecastFacade: ForecastFacade) {
  }
}
