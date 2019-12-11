import { TestBed } from '@angular/core/testing';

import { AppUpdateService } from './app-update.service';

xdescribe('AppUpdateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppUpdateService = TestBed.get(AppUpdateService);
    expect(service).toBeTruthy();
  });
});
