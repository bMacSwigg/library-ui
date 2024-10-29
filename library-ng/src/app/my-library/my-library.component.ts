import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryBookComponent } from '../library-book/library-book.component';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-my-library',
  standalone: true,
  imports: [CommonModule, LibraryBookComponent],
  templateUrl: './my-library.component.html',
  styleUrl: './my-library.component.css'
})
export class MyLibraryComponent {
  bookList: Book[] = [];
  bookService: BookService = inject(BookService);

  constructor() {
    this.bookService.listBooks().then(books => this.bookList = books);
  }

  filterResults(text: string) {
    console.log(text);
  }
}
