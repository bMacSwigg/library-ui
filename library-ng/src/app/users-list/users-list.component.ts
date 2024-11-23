import {Component, inject} from '@angular/core';
import {User} from '../interfaces/user';
import {BookService} from '../book.service';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent {
  columnsToDisplay: string[] = ['user_id', 'name'];
  usersList: User[] = [];
  bookService: BookService = inject(BookService);

  constructor() {
    this.bookService.listUsers().then(users => {
      this.usersList = users;
    });
  }

}
