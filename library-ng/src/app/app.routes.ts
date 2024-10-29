import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { MyLibraryComponent } from './my-library/my-library.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    title: 'Landing',
  },
  {
    path: 'my-library',
    component: MyLibraryComponent,
    title: 'My library',
    canActivate: [authGuard],
  },
];
