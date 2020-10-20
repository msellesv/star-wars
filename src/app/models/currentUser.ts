export class CurrentUser {

    userName: string;
    authData: string;
      
    constructor() {}
  
    setUsername(userName) {
        this.userName = userName;
    }

    getUsername(){
        return this.userName;
    }

    setAuthData(authData){
        this.authData = authData;
    }

    getAuthData(){
        return this.authData;
    }

}