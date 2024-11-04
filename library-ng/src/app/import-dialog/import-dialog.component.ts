import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

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

  constructor(
    private dialogRef: MatDialogRef<ImportDialogComponent>) {}

  cancel() {
    this.dialogRef.close();
  }

  import() {
    console.log(this.isbn);
    this.dialogRef.close();
  }
}
