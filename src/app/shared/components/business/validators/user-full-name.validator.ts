import { AbstractControl, ValidationErrors } from '@angular/forms';
/**
 * Note: both first and last names require the same validation
 */
const firstNameValidation: ValidationErrors | null = (
  control: AbstractControl
) => {
  const name = control.value;
  const lettersRegex = /^[\p{M}\p{L}\p{Script=Arabic}]+$/u; // accounts for different languages and special letters

  const isNameValid = lettersRegex.test(name);

  const validationErrors = {
    isNameValid: !isNameValid,
  };

  return isNameValid ? null : validationErrors;
};
const lastNameValidation: ValidationErrors | null = (
  control: AbstractControl
) => {
  const name = control.value;
  const lettersRegex = /^[\p{M}\p{L}\p{Script=Arabic}]+$/u; // accounts for different languages and special letters

  const isNameValid = lettersRegex.test(name);

  const validationErrors = {
    isNameValid: !isNameValid,
  };

  return isNameValid ? null : validationErrors;
};

const FullNameValidator = {
  firstNameValidation,
  lastNameValidation,
};

export default FullNameValidator;
