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
    // return this.config.darkSkyApiKey === '%DARK_SKY_API_KEY%' ? '<YOUR_DARK_SKY_API_KEY>' : this.config.darkSkyApiKey;
    return this.config.darkSkyApiKey === '%DARK_SKY_API_KEY%' ? '59cd2c19bac276c0e4555230f327e3ee' : this.config.darkSkyApiKey;

  }

  public get vapidPublicKey(): string {
    return this.config.vapidPublicKey === '%VAPID_PUBLIC_KEY%'
      ? 'BF7qv2jYgcI0XTRzFPYZGLok95M9geyg2DpHIc-9xXnMcyI_KDplNRiDFVJS4Q189OYbB3wSkPTqp8I2eV80b80'
      // ? '<YOUR_VAPID_PUBLIC_KEY>'
      : this.config.vapidPublicKey;
  }
}
