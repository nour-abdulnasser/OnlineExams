import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, map, of } from 'rxjs';
import { AuthAPI } from './base/AuthAPI';
import { AuthEndpoint } from './enums/AuthAPI.endpoint';
import { AuthAPIAdapter } from './adapter/auth-api.adapter';
import { LoginRequest } from './interfaces/login-request';
import { LoginResponse } from './interfaces/login-response';
import { AuthRegisterAPIAdapter } from './adapter/auth-register-api.adapter';
import { RegisterRequest } from './interfaces/register-request';
import { AuthConfigService } from './services/auth-config.service';
import { RegisterResponse } from './interfaces/register-response';
import { ForgotPasswordRequest } from './interfaces/forgot-password-request';
import { ForgotPasswordResponse } from './interfaces/forgot-password-response';
import { ForgotPasswordAPIAdapter } from './adapter/forgot-password-api.adapter';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService implements AuthAPI {
  constructor(
    private _httpClient: HttpClient,
    private _authAPIAdapter: AuthAPIAdapter,
    private _authRegisterAPIAdapter: AuthRegisterAPIAdapter,
    private _forgotPasswordAPIAdapter: ForgotPasswordAPIAdapter,
    private _authConfigService: AuthConfigService
  ) {}

  login(data: LoginRequest): Observable<LoginResponse> {
    const url = this._authConfigService.getFullUrl(AuthEndpoint.LOGIN);
    return this._httpClient
      .post(url, data) // observable
      .pipe(
        map((response: any) => this._authAPIAdapter.adapt(response)),
        catchError((err) => {
          console.error('Login API error:', err);
          throw err;
        })
      );
  }
  register(data: RegisterRequest): Observable<RegisterResponse> {
    const url = this._authConfigService.getFullUrl(AuthEndpoint.REGISTER);
    return this._httpClient.post(url, data).pipe(
      map((res: any) => this._authRegisterAPIAdapter.adapt(res)),
      catchError((err) => {
        console.error('Registration API error:', err);
        throw err;
      })
    );
  }

  forgotPassword(
    data: ForgotPasswordRequest
  ): Observable<ForgotPasswordResponse> {
    // prep url for making request
    const url = this._authConfigService.getFullUrl(
      AuthEndpoint.FORGOT_PASSWORD
    );
    // return response
    return this._httpClient.post(url, data).pipe(
      // adapt response
      map((res: any) => this._forgotPasswordAPIAdapter.adapt(res)),
      // handle error
      catchError((err) => {
        console.error('Forgot password request error');
        throw err;
      })
    );
  }
}
