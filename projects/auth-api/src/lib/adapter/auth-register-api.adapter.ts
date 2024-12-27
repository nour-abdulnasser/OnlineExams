import { Injectable } from '@angular/core';

import { Adapter } from '../interfaces/adapter';
import { RegisterApiResponse } from '../interfaces/register-api-response';
import { RegisterResponse } from '../interfaces/register-response';


@Injectable({
  providedIn: 'root',
})

export class AuthRegisterAPIAdapter implements Adapter {
  constructor() {}

  adapt(data: RegisterApiResponse) : RegisterResponse{
    return {
      userEmail: data.user.email,
      token: data.token ||"",
      message: data.message,
    };
  }
}
 