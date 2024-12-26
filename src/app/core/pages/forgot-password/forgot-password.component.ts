  import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthApiService } from 'auth-api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ErrorMessageComponent } from '../../../shared/components/ui/error-message/error-message.component';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [InputTextModule, ButtonModule, ErrorMessageComponent,ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss',
})
export class ForgotPasswordComponent {
  // our form's value is tailored to the api request interface, that is why we can sent the form group in the api request

  forgotPasswordForm: FormGroup = this._FormBuilder.group({
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(
    private _AuthApiService: AuthApiService,
    private _FormBuilder: FormBuilder
  ) {}

  apiDisplayMessage = '';
  isLoading = false;

  forgotPassword() {
    this.isLoading = true;

    this._AuthApiService
      .forgotPassword(this.forgotPasswordForm.value)
      .subscribe({
        next: (res) => {
          this.apiDisplayMessage = res.info;
        },
        error: (err) => {
          this.apiDisplayMessage = err;
          console.error('code request error', err);
          this.isLoading = false;
        },
        complete: () => {
          this.isLoading = false;
        },
      });
  }

  
}
