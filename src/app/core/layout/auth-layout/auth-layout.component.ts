import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AuthNavBarComponent } from '../../../feature/components/auth-nav-bar/auth-nav-bar.component';
import { SocialsListComponent } from '../../../shared/components/ui/socials-list/socials-list.component';
import { DividerComponent } from '../../../shared/components/ui/divider/divider.component';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [RouterOutlet, RouterModule, FormsModule, AuthNavBarComponent, SocialsListComponent, DividerComponent],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss',
})
export class AuthLayoutComponent {

}
