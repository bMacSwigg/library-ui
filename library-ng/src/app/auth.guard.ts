import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  // If we have a saved user_id, assume there is a valid user signed in and the auth just hasn't fired yet
  if (auth.authenticated() || sessionStorage.getItem('user_id')) {
    return true;
  } else {
    router.navigate(['']);
    return false;
  }
};
