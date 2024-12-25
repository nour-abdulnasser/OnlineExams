import { AbstractControl, ValidationErrors } from '@angular/forms';

function passwordStrength(control: AbstractControl): ValidationErrors | null {
  // grab value to test on
  const password = control.value;

  // define custom logic needed
  const minLength = 6;
  const maxLength = 25;
  const lengthRegex = new RegExp(`.{${minLength},${maxLength}}`);

  // test
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasRightLength = lengthRegex.test(password);

  // checking password is valid
  const isPasswordValid =
    hasUpperCase && hasNumber && hasLowerCase && hasRightLength;

  // prep validation error message
  const validationErrors = {
    hasUpperCase: !hasUpperCase,
    hasLowerCase: !hasLowerCase,
    hasNumber: !hasNumber,
    hasRightLength: !hasRightLength,
  };

  return isPasswordValid ? null : validationErrors;
}

function matchPassword(control: AbstractControl): ValidationErrors | null {
  const confirmPassword = control.value;
  const password = control?.parent?.get('password')?.value;
  if (!password) return null;
  return confirmPassword === password ? null : { mismatch: true };
}

const PasswordValidator = {
  passwordStrength,
  matchPassword,
};

export default PasswordValidator;
