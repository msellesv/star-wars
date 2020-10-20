import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service'
import { FormBuilder } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm;
  loading: boolean = false;

  constructor(public authenticationService:AuthenticationService, private formBuilder: FormBuilder, public router:Router) {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  ngOnInit(): void {

  }

  login(userData) {

    this.loading = true;
   
    this.authenticationService.Login(userData.username, userData.password).then((done:any)=>{
      this.loading = false;
        if (done.success) {
            this.authenticationService.SetCredentials(userData.username, userData.password);
            this.router.navigate(['/ships']);
        } else {
          this.loading = false;
        }
    })
  };

}
