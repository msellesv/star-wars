import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersLocalService {

  constructor() {}

  GetAll() {
    return this.getUsers();
  }

  GetById(id) {
    var filtered = this.getUsers().filter(user => user.id === id);
    var user = filtered.length ? filtered[0] : null;
    return user;
  }

  GetByUsername(userName) {
    var filtered = this.getUsers().filter(user => user.userName === userName);
    var user = filtered.length ? filtered[0] : null;
    return user;
  }

  Create(user) {
    return new Promise((resolve) => {
      // simulate api call with $timeout
      setTimeout(() => {
        let duplicateUser = this.GetByUsername(user.userName)

        if (duplicateUser !== null) {
          resolve({ success: false, message: 'Username "' + user.userName + '" is already taken' });
        } else {
          var users = this.getUsers();

          // assign id
          var lastUser = users[users.length - 1] || { id: 0 };
          user.id = lastUser.id + 1;

          // save to local storage
          users.push(user);
          this.setUsers(users);

          resolve({ success: true });
        }
      }, 1000);
    })
  }

  Update(user) {
    var users = this.getUsers();
    for (var i = 0; i < users.length; i++) {
      if (users[i].id === user.id) {
        users[i] = user;
        break;
      }
    }
    this.setUsers(users);
  }

  Delete(id) {
    var users = this.getUsers();
    for (var i = 0; i < users.length; i++) {
      var user = users[i];
      if (user.id === id) {
        users.splice(i, 1);
        break;
      }
    }
    this.setUsers(users);
  }

  // private functions
  private getUsers() {
    if (!localStorage.users) {
      localStorage.users = JSON.stringify([]);
    }

    return JSON.parse(localStorage.users);
  }

  private setUsers(users) {
    localStorage.users = JSON.stringify(users);
  }

}
