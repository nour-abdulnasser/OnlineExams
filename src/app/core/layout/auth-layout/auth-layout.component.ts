  import { Component } from '@angular/core';
  import { FormsModule } from '@angular/forms';
  import { RouterModule, RouterOutlet } from '@angular/router';
  import { ButtonModule } from 'primeng/button';
  import { DropdownModule } from 'primeng/dropdown';

  @Component({
    selector: 'app-auth-layout',
    standalone: true,
    imports: [
      RouterOutlet,
      RouterModule,
      ButtonModule,
      DropdownModule,
      FormsModule,
    ],
    templateUrl: './auth-layout.component.html',
    styleUrl: './auth-layout.component.scss',
  })
  export class AuthLayoutComponent {
    languages: string[] = ['English', 'Arabic'];
    selectedLanguage!: string;
  }
