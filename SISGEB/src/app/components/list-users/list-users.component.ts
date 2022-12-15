import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interfaces/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  listUsers: User[] = []
  loading: Boolean = false;
  constructor(private _userService: UsersService, private toastr: ToastrService){ }

  ngOnInit(): void {
    this.getListUsers();
  }

  getListUsers(){
    this.loading = true;
    this._userService.getListUsers().subscribe({
      next:(data: User[]) => {
        this.listUsers = data;
        this.loading = false;
      },
      error: (e: HttpErrorResponse) => {
        this.loading = false;
        this.msjError(e);
      }
    })
  }

  deleteUser(id: number){
    this.loading = true;
    this._userService.deleteUser(id).subscribe({
      next: () => {
        this.getListUsers();
        this.toastr.warning("Usuario Eliminado con exito", "Usuario Eliminado")
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
