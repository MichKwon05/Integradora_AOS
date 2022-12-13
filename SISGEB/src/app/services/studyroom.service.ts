import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Studyroom } from '../interfaces/studyroom';

@Injectable({
  providedIn: 'root'
})
export class StudyroomService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/studyrooms'
  }

  getListStudyrooms(): Observable<Studyroom[]>{
    return this.http.get<Studyroom[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  deleteStudyroom(id: number): Observable<void>{
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}/${id}`);
  }

  saveStudyroom(studyroom: Studyroom): Observable<void>{
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, studyroom)
  }

  getStudyroom(id: number): Observable<Studyroom>{
    return this.http.get<Studyroom>(`${this.myAppUrl}${this.myApiUrl}/${id}`)
  }

  updateStudyroom(id: number, studyroom: Studyroom): Observable<void>{
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}/${id}`, studyroom);
  }
}
