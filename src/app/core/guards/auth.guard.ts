import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

import { AuthApiService } from 'auth-api';

// TODO: make guards part of library
// TODO: Rely less on local storage token
export const AuthGuardFn: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('onlineExamsUser');
  const router = inject(Router);
  if (!token) {
    router.navigate(['/auth/login']);
    return false;
  }
  return true;
};
