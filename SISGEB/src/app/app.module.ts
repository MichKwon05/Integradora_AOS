import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { AddEditUserComponent } from './components/add-edit-user/add-edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListUsersComponent,
    AddEditUserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
