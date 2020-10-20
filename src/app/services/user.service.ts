import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: {
    username: string,
    authdata: string
  }

  constructor() {
    this.removeUserData();
  }

  setUserData(username, authdata){
    this.currentUser.username = username;
    this.currentUser.authdata = authdata;
  }

  getUserData(){
    return this.currentUser;
  }

  removeUserData(){
    this.currentUser.username = null;
    this.currentUser.authdata = null;
  }

}
