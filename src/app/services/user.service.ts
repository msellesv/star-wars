import { Injectable } from '@angular/core';
import { CurrentUser } from '../models/currentUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: CurrentUser; 

  constructor() {
    this.removeUserData();
  }

  setUserData(username, authData){
    this.currentUser = new CurrentUser();
    this.currentUser.setUsername(username);
    this.currentUser.setAuthData(authData);
  }

  getUserData():CurrentUser{
    return this.currentUser;
  }

  removeUserData(){
    this.currentUser = null
  }

}
