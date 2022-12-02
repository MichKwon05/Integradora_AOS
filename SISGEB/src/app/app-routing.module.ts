import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { AddEditUserComponent } from './components/add-edit-user/add-edit-user.component';
import { ListUsersComponent } from './components/list-users/list-users.component';

const routes: Routes = [
  { path: '', component: ListUsersComponent },
  { path: 'addUser', component: AddEditUserComponent },
  { path: 'editUser/:id', component: AddEditUserComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }