import { Injectable, inject } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth = inject(Auth);
  private provider = new GoogleAuthProvider();

  constructor() {
    this.provider.addScope('https://www.googleapis.com/auth/userinfo.email');
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
}
