import { Component, input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-error-message',
  standalone: true,
  templateUrl: `./error-message.component.html`,
})
export class ErrorMessageComponent {
  message = input.required<string | ValidationErrors | null>();

  getErrorMessages(): string[] {
    const errors = this.message();
    if (!errors || typeof errors === 'string') return [];

    const messages: string[] = [];
    if (errors['hasUpperCase']) messages.push('Password must contain at least one uppercase letter');
    if (errors['hasLowerCase']) messages.push('Password must contain at least one lowercase letter');
    if (errors['hasNumber']) messages.push('Password must contain at least one number');
    if (errors['hasRightLength']) messages.push('Password must be between 6 and 25 characters');
    if (errors['mismatch']) messages.push('Passwords must match');
    
    return messages;
  }
}
