import { TestBed, async, inject } from '@angular/core/testing';

import { ForecastGuard } from './forecast.guard';

describe('ForecastGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForecastGuard]
    });
  });

  it('should ...', inject([ForecastGuard], (guard: ForecastGuard) => {
    expect(guard).toBeTruthy();
  }));
});
