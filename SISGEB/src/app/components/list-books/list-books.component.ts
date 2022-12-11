import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Book } from 'src/app/interfaces/books';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit{
  listBooks: Book[] = []
  loading: Boolean = false;
  constructor(private _bookService: BooksService, private toastr: ToastrService){ }

  ngOnInit(): void {
    this.getListBooks();
  }

  getListBooks(){
    this.loading = true;
    this._bookService.getListBooks().subscribe((data: Book[]) => {
      this.listBooks = data;
      this.loading = false;
    })
  }

  deleteUser(id: number){
    this.loading = true;
    this._bookService.deleteBook(id).subscribe(() => {
      this.getListBooks();
      this.toastr.warning("Usuario Eliminado con exito", "Usuario Eliminado")
    })
  }
}
