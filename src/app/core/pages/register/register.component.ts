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
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, InputTextModule, PasswordModule, ButtonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  registerForm: FormGroup = this._FormBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
    rePassword: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    username: ['', Validators.required],
    phoneNumber: ['', Validators.required],
  });

  // registerForm: FormGroup = new FormGroup({
  //   email: new FormControl(null, [Validators.required, Validators.email]),
  //   password: new FormControl(null, [
  //     Validators.required,
  //     Validators.pattern(/^(?=.*[A-Z])(?=.*\d).+$/),
  //     Validators.minLength(8),
  //   ]),
  //   firstName: new FormControl(null, [Validators.required]),
  //   lastName: new FormControl(null, [Validators.required]),
  //   username: new FormControl(null, [Validators.required]),
  //   phone: new FormControl(null, [
  //     Validators.required,
  //     Validators.pattern(/^01[0125][0-9]{8}$/),
  //   ]),
  //   rePassword: new FormControl(null, [
  //     Validators.required,
  //     Validators.minLength(8),
  //   ]),
  // });

  constructor(
    private _authApiService: AuthApiService,
    private _FormBuilder: FormBuilder
  ) {}
  register() {
    this._authApiService
      .login(this.registerForm.value)
      .subscribe((res) => console.log(res, 'res'));
  }
}
