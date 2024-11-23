import { Component, Input } from '@angular/core';
import { Book } from '../interfaces/book';

@Component({
  selector: 'app-library-book',
  standalone: true,
  imports: [],
  templateUrl: './library-book.component.html',
  styleUrl: './library-book.component.css'
})
export class LibraryBookComponent {
  @Input() book!: Book;
}
