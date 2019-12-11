import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { ForecastDetailedComponent } from '../forecast-detailed/forecast-detailed.component';
import { ForecastShortComponent } from '../forecast-short/forecast-short.component';
import { DarkSkyHttpService } from '../../services/dark-sky-http.service';
import { ForecastComponent } from './forecast.component';

xdescribe('ForecastComponent', () => {
  let component: ForecastComponent;
  let fixture: ComponentFixture<ForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HttpClientModule,
        ForecastDetailedComponent,
        ForecastShortComponent,
        ForecastComponent,
      ],
      providers: [
        DarkSkyHttpService,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
