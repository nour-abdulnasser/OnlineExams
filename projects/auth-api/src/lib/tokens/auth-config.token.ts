import { InjectionToken } from '@angular/core';
import { AuthConfig } from '../interfaces/auth-config';

export const AUTH_CONFIG = new InjectionToken<AuthConfig>('auth.config');
