import { Injectable, inject } from '@angular/core';
import { AUTH_CONFIG } from '../tokens/auth-config.token';

@Injectable({
  providedIn: 'root',
})

/**
 * Service to get the full URL with the baseURL sent from App
 */
export class AuthConfigService {
  private _config = inject(AUTH_CONFIG)

  getFullUrl (endpoint: string):string{
    const cleanBaseUrl = this._config.baseUrl.replace(/\/+$/, '');
    const cleanEndpoint = endpoint.replace(/^\/+/, '');
    
    return `${cleanBaseUrl}/${cleanEndpoint}`;
  }
}
