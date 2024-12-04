import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Book } from '../interfaces/book';
import { BookService } from '../services/book.service';
import {MatDividerModule} from '@angular/material/divider';
import {LookupService} from '../services/lookup.service';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-import-dialog',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatFormFieldModule, MatDialogModule, MatDividerModule, MatButtonModule],
  templateUrl: './import-dialog.component.html',
  styleUrl: './import-dialog.component.css'
})
export class ImportDialogComponent {
  isbn: string = '';
  title: string = '';
  author: string = '';
  category: string = 'Fiction';
  year: string = '';
  url: string = '';
  bookService: BookService = inject(BookService);
  lookupService: LookupService = inject(LookupService);

  constructor(
    private dialogRef: MatDialogRef<ImportDialogComponent>) {}

  async lookup() {
    const book = await this.lookupService.lookupBook(this.isbn);
    if (book) {
      this.title = book.title;
      this.author = book.author;
      this.category = book.category;
      this.year = book.year;
      this.url = book.thumbnail;
    }
  }

  cancel() {
    this.dialogRef.close();
  }

  import() {
    if (!this.isbn || !this.title || !this.author) {
      return;
    }
    const book: Partial<Book> = {
      isbn: this.isbn,
      title: this.title,
      author: this.author,
      category: this.category,
      year: this.year,
      thumbnail: this.url,
    };
    this.bookService.createBook(book);
    this.dialogRef.close();
  }
}
