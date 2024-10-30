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
  filteredList: Book[] = [];
  bookService: BookService = inject(BookService);

  constructor() {
    this.bookService.listBooks().then(books => {
      this.bookList = books;
      this.filteredList = books;
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredList = this.bookList;
      return;
    }

    this.filteredList = this.bookList.filter((book) =>
      book?.title.toLowerCase().includes(text.toLowerCase()) ||
      book?.author.toLowerCase().includes(text.toLowerCase())
    );
  }
}
