import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }
  baseUrl = environment.API_BASE_URL;

  getBookList() {
    return this.http.get(this.baseUrl + "/books");
  }
  getBook(id: number) {
    return this.http.get(this.baseUrl + "/books/" + id);
  }
  deleteBook(id: number) {
    return this.http.delete(this.baseUrl + "/books/" + id);
  }
  updateBook(book: Book) {
    return this.http.put(this.baseUrl + "/books/", book);
  }
  createBook(book: Book) {
    console.log(book);
    return this.http.post(this.baseUrl + "/books/", book);
  }

}
