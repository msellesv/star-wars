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

@NgModule({
  declarations: [
    AppComponent
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
