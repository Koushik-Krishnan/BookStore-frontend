import { BookService } from './../book/book.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  constructor(private route:ActivatedRoute,private bookService: BookService) { 
    this.route.params.subscribe((param) => {
      this.id = param['id']
    });
  }

  id: number;
  book = new Book();
  showAlert= false;

  ngOnInit(): void {
   
    this.bookService.getBook(this.id).subscribe((response: any)=>{
     this.book= response;
    });
  }

  updateBook(){
    this.bookService.updateBook(this.book).subscribe((response) => {
      console.log();
      this.showAlert = true;
      console.log(response);
  });
}

  closeAlert(){
    this.showAlert = false;
  }
}
