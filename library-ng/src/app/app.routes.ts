import { Routes } from '@angular/router';
import { MyLibraryComponent } from './my-library/my-library.component';

export const routes: Routes = [
  {
    path: '',
    component: MyLibraryComponent,
    title: 'My library',
  },
];
