import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastPlaceholderComponent } from './forecast-placeholder.component';

describe('ForecastPlaceholderComponent', () => {
  let component: ForecastPlaceholderComponent;
  let fixture: ComponentFixture<ForecastPlaceholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastPlaceholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
