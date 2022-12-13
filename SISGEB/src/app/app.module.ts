import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Moduloss
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { ToastrModule } from 'ngx-toastr';

// Componentes
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { AddEditUserComponent } from './components/add-edit-user/add-edit-user.component';
import { PageNotFoundComponentComponent } from './components/page-not-found-component/page-not-found-component.component';
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component';
import { ProfileUserComponent } from './components/profile-user/profile-user.component';
import { AddEditBookComponent } from './components/add-edit-book/add-edit-book.component';
import { ListBooksComponent } from './components/list-books/list-books.component';
import { ListStudyroomComponent } from './components/list-studyroom/list-studyroom.component';
import { ListEquipmentComponent } from './components/list-equipment/list-equipment.component';
import { AddEditEquipmentComponent } from './components/add-edit-equipment/add-edit-equipment.component';
import { AddEditStudyroomComponent } from './components/add-edit-studyroom/add-edit-studyroom.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListUsersComponent,
    AddEditUserComponent,
    PageNotFoundComponentComponent,
    ProgressBarComponent,
    ProfileUserComponent,
    AddEditBookComponent,
    ListBooksComponent,
    ListStudyroomComponent,
    ListEquipmentComponent,
    AddEditEquipmentComponent,
    AddEditStudyroomComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right'
    }), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
