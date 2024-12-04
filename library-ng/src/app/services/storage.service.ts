import {Injectable} from '@angular/core';
import {User} from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
  }

  setLocalUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  hasLocalUser(): boolean {
    return !!localStorage.getItem('user');
  }

  getLocalUser(): User | null {
    const json = localStorage.getItem('user');
    if (json) {
      return JSON.parse(json);
    } else {
      return null;
    }
  }

  clearData() {
    localStorage.clear();
  }
}
