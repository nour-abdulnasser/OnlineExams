import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AUTH_CONFIG, AuthConfig } from 'auth-api';
import { environment } from '../environments/environment';
import { provideAnimations } from '@angular/platform-browser/animations';
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideAnimations(),
    {
      provide: AUTH_CONFIG,
      useValue: {
        baseUrl: environment.baseUrl, // Here's where environment connects to your library
      } as AuthConfig,
    },
  ],
};
