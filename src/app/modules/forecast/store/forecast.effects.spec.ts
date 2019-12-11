import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ForecastEffects } from './forecast.effects';

xdescribe('ForecastEffects', () => {
  // tslint:disable-next-line:prefer-const
  let actions$: Observable<any>;
  let effects: ForecastEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ForecastEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<ForecastEffects>(ForecastEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
