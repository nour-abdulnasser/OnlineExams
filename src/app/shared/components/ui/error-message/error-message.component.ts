import { Component, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-error-message',
  standalone: true,
  templateUrl: `./error-message.component.html`,
})
export class ErrorMessageComponent {
  // prop of errors passed to display message
  @Input() errors: ValidationErrors | null = null;

  get errorMessage(): string {
    if (!this.errors) return '';

    if (this.errors['required']) {
      return 'This field is required.';
    }
    if (this.errors['email']) {
      return 'Please enter a valid email.';
    }

    if (this.errors['hasUpperCase']) {
      return 'This field must contain at least one uppercase letter.';
    }
    if (this.errors['hasLowerCase']) {
      return 'This field must contain at least one lowercase letter.';
    }
    if (this.errors['hasNumber']) {
      return 'This field must contain at least one number.';
    }
    if (this.errors['hasRightLength']) {
      return 'This field must be 8 to 25 characters long.';
    }
    if (this.errors['mismatch']) {
      return 'Passwords must match.';
    }
    if (this.errors['isNameValid']) {
      return 'Name must only contain letters.';
    }
    if (this.errors['isPhoneValid']) {
      return 'Please enter a valid phone number.';
    }
    if (this.errors['hasSpecialChar']) {
      return 'This field must contain at least one special character.';
    }

    return 'Invalid Input.';
  }
}
