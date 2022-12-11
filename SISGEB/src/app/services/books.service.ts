import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from '../interfaces/books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/books'
  }

  getListBooks(): Observable<Book[]>{
    return this.http.get<Book[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  deleteBook(id: number): Observable<void>{
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}/${id}`);
  }

  saveBook(book: Book): Observable<void>{
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, book)
  }

  getBook(id: number): Observable<Book>{
    return this.http.get<Book>(`${this.myAppUrl}${this.myApiUrl}/${id}`)
  }

  updateBook(id: number, book: Book): Observable<void>{
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}/${id}`, book);
  }
}