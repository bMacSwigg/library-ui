import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { HeaderComponent } from './header/header.component';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'library-ng';

  constructor(private auth: Auth, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        // User is signed in
        this.authService.validateUser().then(user_id => {
          if (isNaN(user_id)) {
            // Not a valid user for the app; so sign out
            window.alert('Not a valid user');
            this.authService.signOut();
          } else {
            sessionStorage.setItem('user_id', String(user_id));
          }
        });
      } else {
        // User is signed out
        sessionStorage.removeItem('user_id');
        this.router.navigate(['']);
      }
    });
  }
}
