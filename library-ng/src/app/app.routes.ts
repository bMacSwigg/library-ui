import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { UserLibraryComponent } from './user-library/user-library.component';
import { UsersListComponent } from './users-list/users-list.component';
import { authGuard } from './auth.guard';
import {BookDetailsComponent} from './book-details/book-details.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    title: 'Landing',
  },
  {
    path: 'my-library',
    component: UserLibraryComponent,
    title: 'My Library',
    canActivate: [authGuard],
  },
  {
    path: 'library/:userId',
    component: UserLibraryComponent,
    // TODO: use a Resolver to dynamically set this to "[User]'s Library", or to "My Library" if userId is self
    title: 'Library',
    canActivate: [authGuard],
  },
  {
    path: 'my-library/books/:bookId',
    component: BookDetailsComponent,
    title: 'My Book',
    canActivate: [authGuard],
  },
  {
    path: 'library/:userId/books/:bookId',
    component: BookDetailsComponent,
    // TODO: similar to above, "[User]'s Book" or "My Book"
    title: 'Book',
    canActivate: [authGuard],
  },
  {
    path: 'account',
    component: AccountDetailsComponent,
    title: 'Account Details',
    canActivate: [authGuard],
  },
  {
    path: 'users',
    component: UsersListComponent,
    title: 'Users',
    canActivate: [authGuard],
  },
];
