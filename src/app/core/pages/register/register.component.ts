import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { AuthApiService } from 'auth-api';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';

import PasswordValidator from '../../../shared/components/business/validators/password.validator';
import { ErrorMessageComponent } from '../../../shared/components/ui/error-message/error-message.component';
import FullNameValidator from '../../../shared/components/business/validators/user-full-name.validator';
import PhoneValidator from '../../../shared/components/business/validators/phone.validator';
import { Router } from '@angular/router';
import { PageTitleComponent } from '../../../shared/components/ui/page-title/page-title.component';
import { DividerComponent } from '../../../shared/components/ui/divider/divider.component';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    ErrorMessageComponent,
    PageTitleComponent, DividerComponent
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  registerForm: FormGroup = this._FormBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, PasswordValidator.passwordStrength]],
    rePassword: ['', [Validators.required, PasswordValidator.matchPassword]],
    firstName: [
      '',
      [Validators.required, FullNameValidator.firstNameValidation],
    ],
    lastName: ['', [Validators.required, FullNameValidator.lastNameValidation]],
    username: ['', [Validators.required]],
    phone: ['', [Validators.required, PhoneValidator.phoneValidation]],
  });

  isLoading = false;
  // TODO: grab api error using library
  apiErrorMessage = '';

  constructor(
    private _authApiService: AuthApiService,
    private _FormBuilder: FormBuilder,
    private _router: Router
  ) {}
  register() {
    this.isLoading = true;
    this._authApiService.register(this.registerForm.value).subscribe({
      next: (res) => {
        // TODO: toaster for successful registration
        if (res.message === 'success') {
          this._router.navigateByUrl('/auth/login');
        }
      },
      error: (err) => {
        this.apiErrorMessage = err.error.message;
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  /**
   * Validation helpers (to avoid repitition of touched)
   */
  isFieldValid(fieldName: string): boolean {
    const field = this.registerForm.get(fieldName);
    return field ? field.invalid && field.touched : false;
  }

  getFieldErrors(fieldName: string) {
    console.log(this.registerForm);
    return this.registerForm.get(fieldName)?.errors ?? null;
  }
}
