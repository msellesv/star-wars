import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// guards
import { AuthGuard } from './guards/authGuard';

// services
import { AuthenticationService } from './services/authentication.service';
import { ShipsService } from './services/ships.service';
import { UsersLocalService } from './services/users-local.service';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';

// pages
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ShipsComponent } from './pages/ships/ships.component';
import { StarshipdetailComponent } from './pages/starshipdetail/starshipdetail.component';

// components that can be reused
import { StarshipsListComponent } from './components/starships-list/starships-list.component';
import { StarshipComponent } from './components/starship/starship.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ShipsComponent,
    StarshipsListComponent,
    StarshipComponent,
    StarshipdetailComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [
    AuthenticationService,
    ShipsService,
    UsersLocalService,
    UserService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
