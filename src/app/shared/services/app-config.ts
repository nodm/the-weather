import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppConfig {
  // @ts-ignore
  private readonly config = window.appConfig || {};

  public get version(): string {
    return `v${this.config.version} build ${this.config.buildNumber}`;
  }

  public get darkSkyApiKey(): string {
    return this.config.darkSkyApiKey;
  }
}

