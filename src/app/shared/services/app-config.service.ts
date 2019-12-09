import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppConfigService {
  // @ts-ignore
  private readonly config = window.appConfig;

  public get buildNumber(): string {
    return `build ${this.config.buildNumber || '#'}`;
  }

  public get darkSkyApiKey(): string {
    return this.config.darkSkyApiKey === '%DARK_SKY_API_KEY%' ? '<YOUR_DARK_SKY_API_KEY>' : this.config.darkSkyApiKey;
  }
}

