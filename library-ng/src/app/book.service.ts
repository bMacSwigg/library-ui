import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  baseUrl = '';
  bookList: Book[] = [
    {
      id: '1',
      isbn: '9780802163011',
      owner_id: 1,
      title: 'Prophet Song',
      author: 'Paul Lynch',
      category: 'Fiction',
      year: '2023',
      thumbnail: 'https://m.media-amazon.com/images/I/71p4LJIxG5L._AC_UF1000,1000_QL80_.jpg',
      is_out: false,
    },
    {
      id: '2',
      isbn: '9781335430991',
      owner_id: 1,
      title: 'Before the coffee gets cold',
      author: 'Toshikazu Kawaguchi',
      category: 'Fiction',
      year: '2019',
      thumbnail: 'https://mrbookfish.com/wp-content/uploads/2023/11/Before-the-Coffee-Gets-Cold_Toshikazu-Kawaguchi_Front-Cover.webp',
      is_out: false,
    }
  ];

  constructor() { }

  listBooks() {
    return this.bookList;
  }
}
