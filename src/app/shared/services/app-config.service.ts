import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppConfigService {
  // @ts-ignore
  private readonly config = window.appConfig;

  public get version(): string {
    return this.config.version === '%PACKAGE_VERSION%'
      ? 'v undefined'
      : `v${this.config.version} build ${this.config.buildNumber}`;
  }

  public get darkSkyApiKey(): string {
    return this.config.darkSkyApiKey === '%DARK_SKY_API_KEY%'
      ? ''
      : this.config.darkSkyApiKey;
  }
}

