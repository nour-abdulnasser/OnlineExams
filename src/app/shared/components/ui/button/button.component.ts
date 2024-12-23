import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button
      [type]="buttonType"
      [disabled]="disabled"
      [style.background]="background"
      [style.color]="color"
      [style.border-radius.px]="borderRadius"
      (click)="onClick.emit($event)"
      class="w-full mt-5 p-3 text-center relative"
    >
      @if(isLoading) {
      <span class="loading-spinner"></span>
      } @else {
      {{ buttonName }}
      }
    </button>
  `,
  styles: [``],
})
export class ButtonComponent {
  @Input() buttonName!: string;
  @Input() background!: string;
  @Input() color!: string;
  @Input() borderRadius!: number;
  @Input() buttonType: 'button' | 'submit' = 'button';
  @Input() disabled = false;
  @Input() isLoading = false;
  @Output() onClick = new EventEmitter<MouseEvent>();
}
