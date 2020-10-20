import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from './services/user.service';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'star-wars';

  constructor(
    public cookieService: CookieService, 
    public userService: UserService,
    public authService: AuthenticationService){}

  ngOnInit(){
    
    let globals:any = this.cookieService.get('globals') || {};
    let parseGlobals = JSON.parse(globals);

    if(parseGlobals){
      this.userService.setUserData(parseGlobals.user,parseGlobals.userdata);
      this.authService.isLogged = true;
    }
  }

}


