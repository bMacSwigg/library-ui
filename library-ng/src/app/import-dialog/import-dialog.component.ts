import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Book } from '../interfaces/book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-import-dialog',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatFormFieldModule, MatDialogModule],
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

  constructor(
    private dialogRef: MatDialogRef<ImportDialogComponent>) {}

  cancel() {
    this.dialogRef.close();
  }

  import() {
    console.log(this.isbn);
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
