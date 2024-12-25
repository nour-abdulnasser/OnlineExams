import { AbstractControl, ValidationErrors } from '@angular/forms';

const phoneValidation: ValidationErrors | null = (control: AbstractControl) => {
  // grab value
  const phone = control.value;

  // validation logic
  const phoneRegex: RegExp = /^01[0125][0-9]{8}$/;

  // test
  const isPhoneValid = phoneRegex.test(phone);

  // prep object
  const validationErrors = {
    isPhoneValid: !isPhoneValid,
  };

  return isPhoneValid ? null : validationErrors;
};

const PhoneValidator = {
  phoneValidation,
};

export default PhoneValidator;
