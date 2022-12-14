import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interfaces/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.css']
})
export class AddEditUserComponent implements OnInit {
  form: FormGroup;
  loading: boolean = false;
  id: number;
  operacion: string = 'Agregar';

  constructor(private fb: FormBuilder,
    private _userService: UsersService,
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
    this.id = Number(aRouter.snapshot.paramMap.get('id'));
    //console.log(this.id);
  }

  ngOnInit(): void {
    if (this.id != 0) {
      this.operacion = 'Editar'
      this.getUser(this.id);
    }
  }

  getUser(id: number){
    this.loading = true;
    this._userService.getUser(id).subscribe((data:User) => {
      //console.log(data);
      this.loading = false;
      this.form.setValue({
        name: data.name,
        surname: data.surname,
        phone: data.phone,
        address: data.address,
        email: data.email,
        password: ''
      })
    })
  }

  addUser() {
    const user: User = {
      name: this.form.value.name,
      surname: this.form.value.surname,
      phone: this.form.value.phone,
      address: this.form.value.address,
      email: this.form.value.email,
      password: this.form.value.password
    }
    this.loading = true;
    
    if(this.id !== 0){
      // Editar
      user.id = this.id;
      this._userService.updateUser(this.id, user).subscribe(() => {
        this.toastr.info(`Usuario de ${user.name} ${user.surname} fue actualizado con exito`, 'Usuario Actualizado');
        this.loading = false;
        this.router.navigate(['/getUsers']);
      })
    }else{
      // Agregar
      this._userService.saveUser(user).subscribe(() => {
        this.toastr.success(`Usuario de ${user.name} ${user.surname} fue registrado con exito`, 'Usuario Registrado');
        this.loading = false;
        this.router.navigate(['/getUsers']);
      })
    }
  }
}