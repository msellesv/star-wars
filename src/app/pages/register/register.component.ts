import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service'
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersLocalService } from '../../services/users-local.service';
import { Router } from "@angular/router";
import { FlashService } from "../../services/flash.service"

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
    public router:Router,
    public fls: FlashService) {
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: new FormControl('', [
        Validators.required
      ]),
      lastName: new FormControl('', [
        Validators.required
      ]),
      userName: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ]),
    });
  }

  register(userData) {
    if(this.registerForm.status=="VALID"){
      this.loading = true;

      this.usersLocalService.Create(userData).then((response:any)=>{
        if (response.success) {
          this.fls.Success('Registration successful', true);
          this.router.navigate(['/login']);
        } else {
          this.fls.Error(response.message);
          this.loading = false;
        }
      })
    }
  }
}