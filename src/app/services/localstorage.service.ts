import {Injectable} from '@angular/core';

@Injectable()

export class LocalStorageService {

  constructor() {
  }

  getUserName() {
    return localStorage.getItem('name');
  }

  getUserInterest() {
    return localStorage.getItem('interest');
  }

  setUserName(name) {
    return localStorage.setItem('name', name);
  }

  setUserInterest(interest) {
    return localStorage.setItem('interest', interest);
  }

  getUser() {
    const user = {
      name: this.getUserName(),
      interest: this.getUserInterest()
    };
    return user;
  }

  setUser(user) {
    this.setUserName(user.name);
    this.setUserInterest(user.interest);
  }

}
