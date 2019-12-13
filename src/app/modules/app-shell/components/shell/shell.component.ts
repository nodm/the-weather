import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppConfigService } from '~shared/services/app-config.service';
import { ForecastLocation } from '~shared/models/forecast-location.interface';
import { APPLICATION_NAME } from '../../constants/shell.constants';
import { State, initForecastLocation, selectForecastLocationList } from '../../store';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit, OnDestroy {
  public readonly appName = APPLICATION_NAME;
  public readonly buildNumber = this.appConfigService.buildNumber;
  public readonly forecastLocationList$: Observable<ForecastLocation[]> = this.store.select(selectForecastLocationList);
  public mobileQuery: MediaQueryList;

  private mobileQueryListener: () => void;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher,
    private store: Store<State>,
    private appConfigService: AppConfigService,
  ) {}

  ngOnInit() {
    this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);

    this.store.dispatch(initForecastLocation());
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }
}
