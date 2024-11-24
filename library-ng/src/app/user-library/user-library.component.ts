import {Component, inject, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { LibraryBookComponent } from '../library-book/library-book.component';
import { ImportDialogComponent } from '../import-dialog/import-dialog.component';
import { Book } from '../interfaces/book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-user-library',
  standalone: true,
  imports: [CommonModule, LibraryBookComponent],
  templateUrl: './user-library.component.html',
  styleUrl: './user-library.component.css'
})
export class UserLibraryComponent implements OnInit {
  @Input() userId?: number;
  isMyLibrary: boolean = false;
  bookList: Book[] = [];
  filteredList: Book[] = [];
  filterText: string = '';
  bookService: BookService = inject(BookService);

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    if (!this.userId) {
      // auth guard ensures this will not be null
      this.userId = parseInt(sessionStorage.getItem('user_id')!);
      this.isMyLibrary = true;
    } else {
      this.isMyLibrary = (this.userId == parseInt(sessionStorage.getItem('user_id')!));
    }
    this.refreshBooks();
  }

  refreshBooks() {
    this.bookService.listBooks(this.userId).then(books => {
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
