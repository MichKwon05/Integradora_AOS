import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Credentials } from 'src/app/interfaces/loginCredentials';
import { ErrorService } from 'src/app/services/error.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading: boolean = false;
  constructor(
    private fb:FormBuilder,
    private _userService: UsersService,
    private router: Router,
    private _errorService: ErrorService
  ){
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {

  }

  login(){
    const userSession: Credentials = {
      email: this.form.value.email,
      password: this.form.value.password
    }
    this.loading = true;

    this._userService.login(userSession).subscribe({
      next: (data) => {
        localStorage.setItem('token', data);
        this.router.navigate(['/getUsers']);
      },
      error: (e: HttpErrorResponse) => {
        this._errorService.msjError(e);
        this.loading = false;
      }
    })
  }
}
