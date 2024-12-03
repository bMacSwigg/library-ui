import {Component, inject, Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BookService } from '../book.service';
import {StorageService} from '../storage.service';

@Component({
  selector: 'app-account-details',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatFormFieldModule],
  templateUrl: './account-details.component.html',
  styleUrl: './account-details.component.css'
})
export class AccountDetailsComponent {
  user_id: number = -1;
  name: string = '';
  email: string = '';
  bookService: BookService = inject(BookService);
  storageService: StorageService = inject(StorageService);

  constructor() {
    // auth guard ensures this will not be null
    this.user_id = this.storageService.getLocalUser()!.user_id;
    this.bookService.getUser(this.user_id).then(user => {
      this.name = user?.name || '';
      this.email = user?.email || '';
    });
  }
}


