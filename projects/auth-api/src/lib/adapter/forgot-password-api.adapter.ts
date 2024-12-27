import { Injectable } from '@angular/core';
import { Adapter } from '../interfaces/adapter';
import { ForgotPasswordResponse } from '../interfaces/forgot-password-response';
import { ForgotPasswordAPIResponse } from '../interfaces/forgot-password-api-response';

@Injectable({
  providedIn: 'root',
})
export class ForgotPasswordAPIAdapter implements Adapter {
  constructor() {}

  adapt(data: ForgotPasswordAPIResponse): ForgotPasswordResponse {
    return {
      message: data.message,
      info: data.info,
    };
  }
}
