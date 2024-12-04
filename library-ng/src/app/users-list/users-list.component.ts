import {Component, inject} from '@angular/core';
import {User} from '../interfaces/user';
import {BookService} from '../services/book.service';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [MatTableModule, RouterModule, MatButtonModule, MatIconModule],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent {
  columnsToDisplay: string[] = ['user_id', 'name', 'actions'];
  usersList: User[] = [];
  bookService: BookService = inject(BookService);

  constructor() {
    this.bookService.listUsers().then(users => {
      this.usersList = users;
    });
  }

}
