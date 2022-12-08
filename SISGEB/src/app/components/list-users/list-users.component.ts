import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  listUsers: User[] = []
  constructor(private _userService: UsersService){ }

  ngOnInit(): void {
    this.getListUsers();
  }

  getListUsers(){
    this._userService.getListUsers().subscribe((data) => {
      this.listUsers = data;
    })
  }
}
