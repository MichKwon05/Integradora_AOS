import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditBookComponent } from './components/add-edit-book/add-edit-book.component';

//Componentes
import { AddEditUserComponent } from './components/add-edit-user/add-edit-user.component';
import { ListBooksComponent } from './components/list-books/list-books.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { PageNotFoundComponentComponent } from './components/page-not-found-component/page-not-found-component.component';
import { ProfileUserComponent } from './components/profile-user/profile-user.component';

const routes: Routes = [
  // Temporal
  { path: '', component: ListUsersComponent },

  //En contrucción--------------------------------------//
  { path: 'profile', component: ProfileUserComponent },
  //---------------------------------------------------//

  // Usuarios
  { path: 'addUser', component: AddEditUserComponent },
  { path: 'editUser/:id', component: AddEditUserComponent },
  { path: 'getUsers' , component: ListUsersComponent },

  // Libros
  { path: 'addBook', component: AddEditBookComponent },
  { path: 'editBook/:id', component: AddEditBookComponent },
  { path: 'getBooks', component: ListBooksComponent },

  // Mostrar Error 404
  { path: '**', component: PageNotFoundComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }