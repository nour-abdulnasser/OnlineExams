import { AbstractControl, ValidationErrors } from '@angular/forms';

export function passwordValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  
  if (!value) return null;

  const hasUpperCase = /[A-Z]/.test(value);
  const hasNumber = /[0-9]/.test(value);
  const hasMinLength = value.length >= 6;

  const isValid = hasUpperCase && hasNumber && hasMinLength;

  if (!isValid) {
    return {
      passwordRequirements: {
        hasUpperCase,
        hasNumber,
        hasMinLength
      }
    };
  }

  return null;
}
