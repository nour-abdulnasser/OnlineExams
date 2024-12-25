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
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  registerForm: FormGroup = this._FormBuilder.group({
    email: ['', Validators.required, Validators.email],
    password: ['', Validators.required, PasswordValidator.passwordStrength],
    confirmPassword: ['', Validators.required, PasswordValidator.matchPassword],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    username: ['', Validators.required],
    phoneNumber: ['', Validators.required],
  });

  constructor(
    private _authApiService: AuthApiService,
    private _FormBuilder: FormBuilder
  ) {
    console.log(this.registerForm.get('password')?.errors);
  }
  register() {
    this._authApiService.login(this.registerForm.value).subscribe({
      next: (res) => {
        console.log('registered successfully. response:', res);
      },
      error: (err) => {
        console.log('failed to register. error:', err);
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
    return this.registerForm.get(fieldName)?.errors ?? null;
  }
}
