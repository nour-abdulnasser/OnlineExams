import { Injectable } from '@angular/core';

import { Adapter } from '../interfaces/adapter';
import { LoginResponse } from '../interfaces/login-response';
import { LoginApiResponse } from '../interfaces/login-api-response';


/**
 * LOGIN ADAPTER ONLY
 */

@Injectable({
  providedIn: 'root',
})
/**
 * this can be just a service, but we want it to follow a guideline
 * The guideline is defined by the adapter
 */
// Implementing interface
export class AuthAPIAdapter implements Adapter {
  constructor() {}

  adapt(data: LoginApiResponse): LoginResponse {
    return {
      userEmail: data.user.email,
      token: data.token,
      message: data.message,
    };
  }
}
