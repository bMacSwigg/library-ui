import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {Book} from './interfaces/book';
import {User} from './interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  baseUrl = 'https://library-server-869102415447.us-central1.run.app';

  constructor(private auth: AuthService) { }

  async listBooks(): Promise<Book[]> {
    const token = await this.auth.token();
    if (!token) {
      console.log('no token');
      return [];
    }

    try {
      const response = await fetch(`${this.baseUrl}/v0/books`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        return response.json();
      } else {
        console.log(`Non-ok response when fetching books: ${response.status}`);
      }
    } catch (err) {
      console.log(`Error when fetching books: ${err}`);
    }
    return [];
  }

  async createBook(book: Partial<Book>): Promise<void> {
    const token = await this.auth.token();
    if (!token) {
      console.log('no token');
      return;
    }

    try {
      await fetch(`${this.baseUrl}/v0/books`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({book: book}),
      });
    } catch (err) {
      console.log(`Error when creating book: ${err}`);
    }
  }

  async getUser(user_id: number): Promise<User | undefined> {
    const token = await this.auth.token();
    if (!token) {
      console.log('no token');
      return;
    }

    try {
      const response = await fetch(`${this.baseUrl}/v0/users/${user_id}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.json();
    } catch (err) {
      console.log(`Error when fetching user: ${err}`);
      return;
    }
  }
}
