import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service'
import { FormBuilder } from '@angular/forms';
import { UsersLocalService } from '../../services/users-local.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm;
  loading: boolean = false;

  constructor(
    public authenticationService:AuthenticationService, 
    private formBuilder: FormBuilder, 
    public usersLocalService:UsersLocalService,
    public router:Router) {

    this.registerForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      userName: '',
      password: ''
    });
  }

  ngOnInit(): void {
  }

  register(userData) {

    this.loading = true;

    this.usersLocalService.Create(userData).then((response:any)=>{
      if (response.success) {
        //FlashService.Success('Registration successful', true);
        this.router.navigate(['/login']);
      } else {
        //FlashService.Error(response.message);
        this.loading = false;
      }
    })
  }
}