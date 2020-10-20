import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

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

// components that can be reused
import { StarshipsListComponent } from './components/starships-list/starships-list.component';
import { StarshipComponent } from './components/starship/starship.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ShipsComponent,
    StarshipsListComponent,
    StarshipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AuthenticationService,
    ShipsService,
    UsersLocalService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
