import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];
  constructor(private bookService: BookService) { }

  ngOnInit(){
    this.bookService.getBookList().subscribe((response: any)=>{
      this.books = response;
    });
  }
  deleteBook(id: number){
    this.bookService.deleteBook(id).subscribe((response)=>{
      console.log(response);
  });
}
}
