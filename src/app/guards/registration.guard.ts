import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const registrationGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const user = JSON.parse(localStorage.getItem('userProfile')!)

  if (user && user.userType === 'user') {
    router.navigate(['user']);
    return true;
  }

  if (user && user.userType === 'provider') {
    router.navigate(['view']);
    return true;
  }

  return true;

};
