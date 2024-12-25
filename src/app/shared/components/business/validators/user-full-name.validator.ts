import { AbstractControl, ValidationErrors } from '@angular/forms';

const firstNameValidation: ValidationErrors | null = (
  control: AbstractControl
) => {
  const name = control.value;
  const lettersRegex = /^[\p{M}\p{L}\p{Script=Arabic}]/gu; // accounts for different languages and special letters

  const isNameValid = name.test(lettersRegex);

  const validationErrors = {
    isNameValid: !!isNameValid,
  };

  return isNameValid ? validationErrors : null;
};
