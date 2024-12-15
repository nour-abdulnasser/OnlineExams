import { Routes } from '@angular/router';
import { LoginComponent } from './core/pages/login/login.component';

export const routes: Routes = [
  {
    path : "",
    redirectTo : "auth",
    pathMatch : "full"
  },
  {
    path: 'auth',
    loadComponent: () =>
      import('./core/layout/auth-layout/auth-layout.component').then(
        (c) => c.AuthLayoutComponent
      ),

    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {
        path: 'register',
        loadComponent: () =>
          import('./core/pages/register/register.component').then(
            (c) => c.RegisterComponent
          ),
      },
      {
        path: 'login',
        loadComponent: () =>
          import('./core/pages/login/login.component').then(
            (c) => c.LoginComponent
          ),
      },
      {
        path : "forgot-password",
        loadComponent : () => import("./core/pages/forgot-password/forgot-password.component").then(m => m.ForgotPasswordComponent)
      },
      {
        path : "verify-code",
        loadComponent : () => import("./core/pages/verify-code/verify-code.component").then(m => m.VerifyCodeComponent)
      },
      {
        path : "reset-password",
        loadComponent : () => import("./core/pages/reset-password/reset-password.component").then(m => m.ResetPasswordComponent)
      },
    ],
  },
];
