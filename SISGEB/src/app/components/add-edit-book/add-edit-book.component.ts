import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Book } from 'src/app/interfaces/books';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-add-edit-book',
  templateUrl: './add-edit-book.component.html',
  styleUrls: ['./add-edit-book.component.css']
})
export class AddEditBookComponent {
  form: FormGroup;
  loading: boolean = false;
  id: number;
  operacion: string = 'Agregar';

  constructor(private fb: FormBuilder,
    private _bookService: BooksService,
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute) {
    this.form = this.fb.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      author: ['', Validators.required],
      editorial: ['', Validators.required],
      publishAge: ['', Validators.required]
    })
    this.id = Number(aRouter.snapshot.paramMap.get('id'));
    console.log(this.id);
  }

  ngOnInit(): void {
    if (this.id != 0) {
      this.operacion = 'Editar'
      this.getBook(this.id);
    }
  }

  getBook(id: number){
    this.loading = true;
    this._bookService.getBook(id).subscribe((data:Book) => {
      //console.log(data);
      this.loading = false;
      this.form.setValue({
        id: data.id,
        title: data.title,
        author: data.author,
        editorial: data.editorial,
        publishAge: data.publishAge
      })
    })
  }

  addBook() {
    const book: Book = {
      title: this.form.value.title,
      author: this.form.value.author,
      editorial: this.form.value.editorial,
      publishAge: this.form.value.publishAge
    }
    this.loading = true;
    
    if(this.id !== 0){
      // Editar
      book.id = this.id;
      this._bookService.updateBook(this.id, book).subscribe(() => {
        this.toastr.info(`El libro fue actualizado con exito`, 'Libro Actualizado');
        this.loading = false;
        this.router.navigate(['/getBooks']);
      })
    }else{
      // Agregar
      this._bookService.saveBook(book).subscribe(() => {
        this.toastr.success(`Libro ${book.title} fue registrado con exito`, 'Libro Registrado');
        this.loading = false;
        this.router.navigate(['/getBooks']);
      })
    }
  }
}
