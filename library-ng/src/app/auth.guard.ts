import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import {Auth} from '@angular/fire/auth';
import {StorageService} from './storage.service';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const storageService = inject(StorageService);
  const firebaseAuth = inject(Auth);
  const router = inject(Router);

  return firebaseAuth.authStateReady().then(() => {
    if (auth.authenticated() && storageService.hasLocalUser()) {
      return true;
    } else {
      return router.navigate(['']).then(() => false);
    }
  });

};
