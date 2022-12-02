import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { AddEditUserComponent } from './components/add-edit-user/add-edit-user.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { PageNotFoundComponentComponent } from './components/page-not-found-component/page-not-found-component.component';

const routes: Routes = [
  { path: '', component: ListUsersComponent },
  { path: 'addUser', component: AddEditUserComponent },
  { path: 'editUser/:id', component: AddEditUserComponent },
  { path: 'getUsers' , component: ListUsersComponent},
  { path: '**', component: PageNotFoundComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }