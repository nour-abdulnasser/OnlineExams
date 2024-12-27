import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { AuthNavBarComponent } from '../../../feature/components/auth-nav-bar/auth-nav-bar.component';
import { SocialsListComponent } from '../../../shared/components/ui/socials-list/socials-list.component';
import { CommonModule } from '@angular/common';
import { DividerComponent } from '../../../shared/components/ui/divider/divider.component';
import {
  SocialAuthService,
  GoogleSigninButtonModule,
} from '@abacritt/angularx-social-login';
@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    FormsModule,
    AuthNavBarComponent,
    SocialsListComponent,
    DividerComponent,
    CommonModule,
    GoogleSigninButtonModule,
  ],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss',
})
export class AuthLayoutComponent implements OnInit {
  constructor(
    private _SocialAuthService: SocialAuthService,
    private _router: Router
  ) {}
  ngOnInit(): void {
    this._SocialAuthService.authState.subscribe({
      next: (response) => {
        if (response) {
          localStorage.setItem('onlineExamsUser', response.idToken);
          this._router.navigateByUrl('/home');
        }
      },
    });
  }
}
