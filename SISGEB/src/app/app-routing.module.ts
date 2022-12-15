import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { AddEditUserComponent } from './components/add-edit-user/add-edit-user.component';
import { ListBooksComponent } from './components/list-books/list-books.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { PageNotFoundComponentComponent } from './components/page-not-found-component/page-not-found-component.component';
import { AddEditEquipmentComponent } from './components/add-edit-equipment/add-edit-equipment.component';
import { AddEditStudyroomComponent } from './components/add-edit-studyroom/add-edit-studyroom.component';
import { AddEditBookComponent } from './components/add-edit-book/add-edit-book.component';
import { ListEquipmentComponent } from './components/list-equipment/list-equipment.component';
import { ListStudyroomComponent } from './components/list-studyroom/list-studyroom.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './utils/auth.guard';

const routes: Routes = [
  // Redirecciona al Login
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  //En contrucción--------------------------------------//
  { path: 'login', component: LoginComponent },
  //---------------------------------------------------//

  // Usuarios
  { path: 'addUser', component: AddEditUserComponent },
  { path: 'editUser/:id', component: AddEditUserComponent },
  { path: 'getUsers' , component: ListUsersComponent, canActivate: [AuthGuard] },

  // Libros
  { path: 'addBook', component: AddEditBookComponent },
  { path: 'editBook/:id', component: AddEditBookComponent },
  { path: 'getBooks', component: ListBooksComponent },

  // Salas
  { path: 'addStudyRoom', component: AddEditStudyroomComponent },
  { path: 'editStudyRoom/:id', component: AddEditStudyroomComponent },
  { path: 'getStudyRooms' , component: ListStudyroomComponent},

  // Equipos
  { path: 'addEquipment', component: AddEditEquipmentComponent },
  { path: 'editEquipment/:id', component: AddEditEquipmentComponent },
  { path: 'getEquipments' , component: ListEquipmentComponent},

  // Mostrar Error 404
  { path: '**', component: PageNotFoundComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }