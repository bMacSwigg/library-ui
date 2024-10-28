import { Component } from '@angular/core';

@Component({
  selector: 'app-my-library',
  standalone: true,
  imports: [],
  templateUrl: './my-library.component.html',
  styleUrl: './my-library.component.css'
})
export class MyLibraryComponent {
  filterResults(text: string) {
    console.log(text);
  }
}
