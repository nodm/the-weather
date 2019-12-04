import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastShortComponent } from './forecast-short.component';

describe('ForecastShortComponent', () => {
  let component: ForecastShortComponent;
  let fixture: ComponentFixture<ForecastShortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastShortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
