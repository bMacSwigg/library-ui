import { Injectable } from '@angular/core';
import {Book} from './interfaces/book';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LookupService {
  // TODO: centralize this config
  baseUrl = 'https://library-server-869102415447.us-central1.run.app';

  constructor(private auth: AuthService) { }

  async lookupBook(isbn: string) : Promise<Book | undefined> {
    const token = await this.auth.token();
    if (!token) {
      console.log('no token');
      return;
    }

    try {
      let url = `${this.baseUrl}/v0/lookup/${isbn}`;
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        return response.json();
      } else {
        console.log(`Non-ok response when looking up book: ${response.status}`);
      }
    } catch (err) {
      console.log(`Error when looking up book: ${err}`);
    }
    return;
  }
}
