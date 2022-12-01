import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/users';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent {

  listUsers: User[] = [
    // Uso para pruebas, proximamente el arreglo se llenará con datos de la Base de Datos
    {id: 1, name: "Axel", surname: "Hernandez", phone: "7775975695", address: "Cuernavaca", email: "20213tn018@utez.edu.mx", password:"admin12345"},
    {id: 2, name: "Natalia", surname: "Garcia", phone: "7777856214", address: "Temixco", email: "20213tn015@utez.edu.mx", password:"nat123"},
    {id: 3, name: "Andrea", surname: "Estrada", phone: "7778755421", address: "Cuernavaca", email: "20213tn011@utez.edu.mx", password:"mich123"},
    {id: 4, name: "Elena", surname: "Abigail", phone: "7771234857", address: "Cuernavaca", email: "20203tn002@utez.edu.mx", password:"elena123"},
  ]


  constructor(){ }

  ngOnInit(): void {

  }
}
