import { HttpErrorResponse } from '@angular/common/http';
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
    this._bookService.getListBooks().subscribe({
      next: (data: Book[]) => {
      this.listBooks = data;
      this.loading = false;
    },
    error: (e: HttpErrorResponse) => {
      this.loading = false;
      this.msjError(e);
    }
  })
  }

  deleteBook(id: number){
    this.loading = true;
    this._bookService.deleteBook(id).subscribe({
      next: () => {
      this.getListBooks();
      this.toastr.warning("Libro Eliminado con exito", "Libro Eliminado")
    },
    error: (e: HttpErrorResponse) => {
      this.loading = false;
      this.msjError(e);
    }
  })
  }

  msjError(e: HttpErrorResponse){
    if (e.error.mensaje) {
      this.toastr.error(e.error.mensaje, 'Error');
    }else{
      this.toastr.error('No se logró establecer conexión con el servidor', 'Error');
    }
  }
}
