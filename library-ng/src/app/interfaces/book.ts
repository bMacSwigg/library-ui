export interface Book {
  id: string;
  isbn: string;
  owner_id: number;
  title: string;
  author: string;
  category: string;
  year: string;
  thumbnail: string;
  is_out: boolean;
  checkout_user?: string;
  checkout_time?: string;
}
