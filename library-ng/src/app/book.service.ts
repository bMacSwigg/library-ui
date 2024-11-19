import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  baseUrl = 'https://library-server-869102415447.us-central1.run.app';

  constructor(private auth: AuthService) { }

  async listBooks() {
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
      return response.json();
    } catch (err) {
      console.log(`Error when fetching books: ${err}`);
      window.alert('Something went wrong');
    }
  }

  async createBook(book: Partial<Book>) {
    const token = await this.auth.token();
    if (!token) {
      console.log('no token');
      return;
    }

    try {
      const response = await fetch(`${this.baseUrl}/v0/books`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({book: book}),
      });
      return;
    } catch (err) {
      console.log(`Error when creating book: ${err}`);
      window.alert('Something went wrong');
    }
  }
}
