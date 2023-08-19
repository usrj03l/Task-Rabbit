import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const userGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const user = JSON.parse(localStorage.getItem('userProfile')!)

  if (user && user.userType === 'user') {    
    return true;
  } else {
    router.navigate(['registration']);
    return false;
  }
};
