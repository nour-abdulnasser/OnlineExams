import { Injectable } from '@angular/core';
import { FormError } from '../interfaces/form-error';

@Injectable({
  providedIn: 'root',
})
export class ErrorMessageService {
  getErrorMessage(fieldName: string, errors: FormError): string {
    if (!errors) return '';

    if (errors.required) {
      return `${fieldName} is required`;
    }

    if (errors.email) {
      return 'Please enter a valid email address';
    }

    if (errors.passwordRequirements) {
      const reqs = errors.passwordRequirements;
      if (!reqs.hasUpperCase)
        return 'Password must contain at least one uppercase letter';
      if (!reqs.hasNumber) return 'Password must contain at least one number';
      if (!reqs.hasMinLength)
        return 'Password must be at least 6 characters long';
    }

    if (errors.minlength) {
      return `${fieldName} must be at least ${errors.minlength.requiredLength} characters`;
    }

    if (errors.pattern) {
      return fieldName.toLowerCase() === 'password'
        ? 'Password must contain at least 1 number and 1 capital letter'
        : `Invalid ${fieldName.toLowerCase()} format`;
    }

    return '';
  }
}
