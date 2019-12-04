import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { CurrentWeatherComponent } from '../current-weather/current-weather.component';
import { DayForecastComponent } from '../day-forecast/day-forecast.component';
import { ForecastComponent } from './forecast.component';
import { DarkSkyHttpService } from '../../services/dark-sky-http.service';

xdescribe('ForecastComponent', () => {
  let component: ForecastComponent;
  let fixture: ComponentFixture<ForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CurrentWeatherComponent,
        HttpClientModule,
        DayForecastComponent,
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
