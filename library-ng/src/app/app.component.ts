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
      if (!user) {
        // User is signed out
        sessionStorage.removeItem('user_id');
        this.router.navigate(['']);
      }
    });
  }
}
