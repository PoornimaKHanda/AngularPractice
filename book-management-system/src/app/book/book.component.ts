import { Component, OnInit } from '@angular/core';
import { book } from '../models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit{

  newBookTitle : string = "";
  newAuthor : string = ""

  books: book[] = [];

  ngOnInit(): void {
      let savedBooks = localStorage.getItem("books");
      this.books = savedBooks ? JSON.parse(savedBooks) : [];
  }

  addBook(){
    if(this.newBookTitle.trim().length && this.newAuthor){
      let newBook: book = {
        id: Date.now(),
        title: this.newBookTitle,
        author: this.newAuthor
      }
      this.books.push(newBook);

      this.newAuthor = "";
      this.newBookTitle = "";
      // alert(this.appointments.length);
      localStorage.setItem("books",JSON.stringify(this.books));
    }
  }
  deleteBook(index:number){
    this.books.splice(index,1);
    localStorage.setItem("books",JSON.stringify(this.books));
  }
}
