import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service'
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { FlashService } from "../../services/flash.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading: boolean = false;

  constructor(public authenticationService:AuthenticationService, private formBuilder: FormBuilder, public router:Router, public fls: FlashService) {

  }

  ngOnInit(): void {
    // clear credentials on open page
    this.authenticationService.ClearCredentials();

    this.loginForm = new FormGroup({
      username: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ]),
    });
  }

  login(userData) {
    console.log(this.loginForm)
    if(this.loginForm.status=="VALID"){
      this.loading = true;
      this.authenticationService.Login(userData.username, userData.password).then((done:any)=>{
        this.loading = false;
          if (done.success) {
              this.authenticationService.SetCredentials(userData.username, userData.password);
              this.router.navigate(['/ships']);
          } else {
            this.fls.Error(done.message)
            this.loading = false;
          }
      })
    }
  };
}
