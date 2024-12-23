import { Component, input } from '@angular/core';

@Component({
  selector: 'app-error-message',
  standalone: true,
  template: `<small class="p-error block">{{message()}}</small>`,
})
export class ErrorMessageComponent {
  message = input.required<string>();
}