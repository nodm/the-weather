import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { DarkSkyHttpService } from './dark-sky-http.service';

xdescribe('DarkSkyHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpClientModule,
      DarkSkyHttpService,
    ],
  }));

  it('should be created', () => {
    const service: DarkSkyHttpService = TestBed.get(DarkSkyHttpService);
    expect(service).toBeTruthy();
  });
});
