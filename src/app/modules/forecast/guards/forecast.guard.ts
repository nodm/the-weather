import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import { ForecastFacade } from '../facades/forecast-facade';

@Injectable()
export class ForecastGuard implements CanActivate {
  constructor(private forecastFacade: ForecastFacade) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): boolean {
    const { locationId } = next.params;
    this.forecastFacade.loadForecast(locationId);

    return true;
  }
}
