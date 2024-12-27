import { Component, forwardRef, Input, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ErrorMessageComponent } from '../error-message/error-message.component';

@Component({
  selector: 'app-form-input',
  standalone: true,
  imports: [
    CommonModule,
    InputTextModule,
    PasswordModule,
    ErrorMessageComponent,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormInputComponent),
      multi: true,
    },
  ],
  templateUrl: `./form-input.component.html`,
  styleUrl: `./form-input.component.scss`,
})
export class FormInputComponent implements ControlValueAccessor {
  readonly placeholder = input.required<string>();
  readonly type = input.required<string>();
  @Input() errors: ValidationErrors | null = null;

  value = '';
  isDisabled = false;
  isTouched = false;

  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  get inputType(): 'text' | 'password' | 'email' {
    return this.type() as 'text' | 'password' | 'email';
  }

  get showError(): boolean {
    return !!this.errors && this.isTouched;
  }

  setValue(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.value = value;
    this.onChange(value);
  }

  recordTouch(): void {
    this.isTouched = true;
    this.onTouched();
  }

  writeValue(value: string): void {
    this.value = value || '';
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
