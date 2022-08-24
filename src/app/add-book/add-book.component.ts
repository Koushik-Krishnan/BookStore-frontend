import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  book = new Book();
  showAlert = false;
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }

  saveBook() {
    this.bookService.createBook(this.book).subscribe((response) => {
      console.log(response);
      this.book = new Book();
      this.showAlert = true;
    });
  }
  closeAlert() {
    this.showAlert = false;
  }


}
