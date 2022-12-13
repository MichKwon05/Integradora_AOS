import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Equipment } from '../interfaces/equipment';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/equipments'
  }

  getListEquipments(): Observable<Equipment[]>{
    return this.http.get<Equipment[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  deleteEquipment(id: number): Observable<void>{
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}/${id}`);
  }

  saveEquipment(equipment: Equipment): Observable<void>{
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, equipment)
  }

  getEquipment(id: number): Observable<Equipment>{
    return this.http.get<Equipment>(`${this.myAppUrl}${this.myApiUrl}/${id}`)
  }

  updateEquipment(id: number, equipment: Equipment): Observable<void>{
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}/${id}`, equipment);
  }
}
