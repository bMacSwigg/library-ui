import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryBookComponent } from './library-book.component';
import { Book } from '../interfaces/book';

const book: Book = {
  id: '1234',
  isbn: '9780802163011',
  owner_id: 1,
  title: 'Prophet Song',
  author: 'Paul Lynch',
  category: 'Fiction',
  year: '2023',
  thumbnail: 'https://m.media-amazon.com/images/I/71p4LJIxG5L._AC_UF1000,1000_QL80_.jpg',
  is_out: false,
}

describe('LibraryBookComponent', () => {
  let component: LibraryBookComponent;
  let fixture: ComponentFixture<LibraryBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibraryBookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibraryBookComponent);
    component = fixture.componentInstance;
    component.book = book;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should list title and author', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.innerText).toEqual('Prophet Song by Paul Lynch');
  });
});
