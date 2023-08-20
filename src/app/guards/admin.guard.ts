import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const user = JSON.parse(localStorage.getItem('userProfile')!)

  if (user && user.userType === 'admin') {    
    return true;
  } else {
    router.navigate(['registration']);
    return false;
  }
};
