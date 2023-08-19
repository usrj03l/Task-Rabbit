import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';



export const serviceGuardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const user = JSON.parse(localStorage.getItem('userProfile')!)

  if (user && user.userType === 'provider') {    
    return true;
  } else {
    router.navigate(['registration']);
    return false;
  }
};
