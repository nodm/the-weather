import { Injectable } from '@angular/core';
import { from, Observable, throwError } from 'rxjs';

@Injectable()
export class GeoLocationService {
  public readonly isEnabled = ('geolocation' in navigator);

  public getCurrentPosition(): Observable<Position> {
    if (!this.isEnabled) {
      return throwError(new Error('Geolocation is not supported by the browser.'));
    }

    return from(new Promise<Position>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    }));
  }
}
