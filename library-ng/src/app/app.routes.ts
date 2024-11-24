import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { UserLibraryComponent } from './user-library/user-library.component';
import { UsersListComponent } from './users-list/users-list.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    title: 'Landing',
  },
  {
    path: 'my-library',
    component: UserLibraryComponent,
    title: 'My library',
    canActivate: [authGuard],
  },
  {
    path: 'library/:userId',
    component: UserLibraryComponent,
    title: 'Library',
    canActivate: [authGuard],
  },
  {
    path: 'account',
    component: AccountDetailsComponent,
    title: 'My account',
    canActivate: [authGuard],
  },
  {
    path: 'users',
    component: UsersListComponent,
    title: 'Users',
    canActivate: [authGuard],
  },
];
