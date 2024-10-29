import { Injectable, inject } from '@angular/core';
import { Auth, GoogleAuthProvider } from '@angular/fire/auth';
import { signInWithPopup, signOut, getIdToken } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth = inject(Auth);
  private provider = new GoogleAuthProvider();

  constructor() {
    this.provider.addScope('https://www.googleapis.com/auth/userinfo.email');
  }

  authenticated() {
    return !!this.auth.currentUser;
  }

  signIn() {
    signInWithPopup(this.auth, this.provider)
      .then(result => {
        // Returns the signed in user along with the provider's credential
        console.log(`${result.user.displayName} logged in.`);
      })
      .catch(err => {
        console.log(`Error during sign in: ${err.message}`);
        window.alert(`Sign in failed. Retry or check your browser logs.`);
      });
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
}
