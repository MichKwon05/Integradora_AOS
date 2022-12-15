import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Credentials } from '../interfaces/loginCredentials';
import { User } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/users'
  }

  getListUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  deleteUser(id: number): Observable<void>{
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}/${id}`);
  }

  saveUser(user: User): Observable<any>{
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}`, user)
  }

  getUser(id: number): Observable<User>{
    return this.http.get<User>(`${this.myAppUrl}${this.myApiUrl}/${id}`)
  }

  updateUser(id: number, user: User): Observable<void>{
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}/${id}`, user);
  }

  login(user: Credentials): Observable<string> {
    return this.http.post<string>(`${this.myAppUrl}${this.myApiUrl}/login`, user);
  }
}
