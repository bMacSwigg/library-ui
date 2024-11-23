import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { LibraryBookComponent } from '../library-book/library-book.component';
import { ImportDialogComponent } from '../import-dialog/import-dialog.component';
import { Book } from '../interfaces/book';
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
  filterText: string = '';
  bookService: BookService = inject(BookService);

  constructor(private dialog: MatDialog) {
    this.refreshBooks();
  }

  refreshBooks() {
    this.bookService.listBooks().then(books => {
      this.bookList = books;
      this.filteredList = books;
      this.filterResults(this.filterText);
    });
  }

  filterResults(text: string) {
    this.filterText = text;

    if (!text) {
      this.filteredList = this.bookList;
      return;
    }

    this.filteredList = this.bookList.filter((book) =>
      book?.title.toLowerCase().includes(text.toLowerCase()) ||
      book?.author.toLowerCase().includes(text.toLowerCase())
    );
  }

  openImportDialog() {
    const dialogRef = this.dialog.open(ImportDialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.refreshBooks();
    });
  }
}
