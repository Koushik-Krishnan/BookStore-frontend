import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './book';

@Pipe({
  name: 'bookFilterPipe'
})
export class BookFilterPipePipe implements PipeTransform {

  transform(list: Book[], searchBook: string): any{
    if(!list){
      return [];
    }
    if(!searchBook){
      return list;
    }
    searchBook = searchBook.toLocaleLowerCase();
   list = list.filter(b=>{
      return b.title.includes(searchBook);
    });
    return list;
  }

}
