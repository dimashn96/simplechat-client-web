import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()

export class HttpService {

  constructor(private http: HttpClient) {
  }

  addUser(user) {
    return this.http.put('https://simplechat-server.herokuapp.com/api/user', user);
  }

  getUser(name) {
    return this.http.get('https://simplechat-server.herokuapp.com/api/user/' + name);
  }

  getMessages() {
    return this.http.get('https://simplechat-server.herokuapp.com/api/messages/');
  }

  getUsers() {
    return this.http.get('https://simplechat-server.herokuapp.com/api/users/');
  }

}
