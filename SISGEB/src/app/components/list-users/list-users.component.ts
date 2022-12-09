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
    this._userService.getListUsers().subscribe((data: User[]) => {
      this.listUsers = data;
      this.loading = false;
    })
  }

  deleteUser(id: number){
    this.loading = true;
    this._userService.deleteUser(id).subscribe(() => {
      this.getListUsers();
      this.toastr.warning("Usuario Eliminado con exito", "Usuario Eliminado")
    })
  }
}
