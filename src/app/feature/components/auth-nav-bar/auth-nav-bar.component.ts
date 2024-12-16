import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DropdownChangeEvent, DropdownModule } from 'primeng/dropdown';
import { Language } from '../../../core/interfaces/language';
@Component({
  selector: 'app-auth-nav-bar',
  standalone: true,
  imports: [RouterModule, FormsModule, ButtonModule, DropdownModule],
  templateUrl: './auth-nav-bar.component.html',
  styleUrl: './auth-nav-bar.component.scss',
})
export class AuthNavBarComponent {
  languages: Language[] = [
    { name: 'English', code: 'en' },
    { name: 'Arabic', code: 'ar' },
  ];
  selectedLanguage: string = this.languages[0].name;
  getLanguageOptions(): string[] {
    return this.languages.map((language) => language.name);
  }
  onLanguageChange(event: DropdownChangeEvent): void {
    console.log('New value:', event);
  }
}
