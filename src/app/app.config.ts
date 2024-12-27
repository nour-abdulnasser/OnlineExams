import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
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
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '526742432154-b1m53cefpc5h7hjc0man8t3grnkm1hhn.apps.googleusercontent.com'
            ),
          },
        ],
        onError: (error) => {
          console.error(error);
        },
      } as SocialAuthServiceConfig,
    },
  ],
};
