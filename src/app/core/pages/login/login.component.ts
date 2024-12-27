import { Component, OnDestroy, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthApiService } from 'auth-api';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FormInputComponent } from '../../../shared/components/ui/form-input/form-input.component';
import { LoginResponse } from '../../../../../dist/auth-api/lib/interfaces/login-response';
import PasswordValidator from '../../../shared/components/business/validators/password.validator';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    FormInputComponent,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup = this._formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [
        Validators.required,
        PasswordValidator.passwordStrength,
        // In login we should only need valid response
        // Validators.minLength(6),
        // Validators.pattern(/^(?=.*[A-Z])(?=.*\d)/), // At least one uppercase and one number
      ],
    ],
  });
  @Output() errors: ValidationErrors | null = null;
  isLoading = false;
  apiErrorMessage = '';

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _authApiService: AuthApiService
  ) {}

  login(): void {
    if (this.loginForm.invalid) return;

    this.isLoading = true;
    this.apiErrorMessage = '';

    this._authApiService.login(this.loginForm.value).subscribe({
      next: (response) => {
        if (response) {
          localStorage.setItem('onlineExamsUser', response.token);
          this._router.navigateByUrl('/home');
        }
      },
      error: (error) => {
        this.apiErrorMessage = error.error.message;
        console.log('Login error:', error.error.message);
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  forgotPassword(): void {
    this._router.navigate(['/auth/forgot-password']);
  }
}
