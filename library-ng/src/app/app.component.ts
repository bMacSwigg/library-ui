import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'library-ng';

  constructor(private auth: Auth, private router: Router) { }

  ngOnInit() {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        // User is signed in
        console.log('navigating to my-library');
        this.router.navigate(['/my-library']);
      } else {
        console.log('navigating to landing');
        this.router.navigate(['']);
      }
    });
  }
}
