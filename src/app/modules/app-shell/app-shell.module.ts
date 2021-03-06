import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ShellComponent } from './components/shell/shell.component';
import { FORECAST_LOCATIONS_STATE_ID } from './constants/forecast-locations.constant';
import { reducer, ForecastLocationsEffects } from './store';
import { GeoLocationService } from './services/geo-location.service';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    ShellComponent,
    HomeComponent,
  ],
  exports: [
    ShellComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    StoreModule.forFeature(FORECAST_LOCATIONS_STATE_ID, reducer),
    EffectsModule.forFeature([ForecastLocationsEffects]),
  ],
  providers: [
    GeoLocationService,
  ],
})
export class AppShellModule { }
