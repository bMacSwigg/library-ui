import { Injectable, inject } from '@angular/core';
import { Auth, GoogleAuthProvider } from '@angular/fire/auth';
import { signInWithPopup, signOut, getIdToken } from '@angular/fire/auth';
import {User} from './interfaces/user';
import {StorageService} from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth = inject(Auth);
  private provider = new GoogleAuthProvider();
  private storageService: StorageService = inject(StorageService);

  constructor() {
    this.provider.addScope('https://www.googleapis.com/auth/userinfo.email');
  }

  authenticated() {
    return !!this.auth.currentUser;
  }

  async signIn() {
    try {
      await signInWithPopup(this.auth, this.provider);
    } catch (err: any) {
      console.log(`Error during sign in: ${err.message}`);
      window.alert(`Sign in failed. Retry or check your browser logs.`);
      return false;
    }

    const user = await this.validateUser();
    if (!user) {
      // Not a valid user for the app; so sign back out
      window.alert('Not a valid user');
      this.signOut();
      return false;
    } else {
      this.storageService.setLocalUser(user);
      return true;
    }
  }

  signOut() {
    signOut(this.auth)
      .then(result => {
        console.log('Signed out.');
      })
      .catch(err => {
        console.log(`Error during sign out: ${err.message}`);
        window.alert(`Sign out failed. Retry or check your browser logs.`);
      });
  }

  async token() {
    const user = this.auth.currentUser;
    if (!user) {
      return null;
    } else {
      return getIdToken(user);
    }
  }

  async validateUser() : Promise<User | undefined> {
    if (this.auth.currentUser) {
      try {
        const token = await this.token();
        const response = await fetch('https://library-server-869102415447.us-central1.run.app/v0/check', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          return response.json();
        }
      } catch (err) {
        console.log(`Error when validating user: ${err}`);
      }
    }
    return;
  }
}
