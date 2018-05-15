import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()

export class HttpService {

  constructor(private http: HttpClient) {
  }

  addUser(user) {
    return this.http.put('http://simplechat-server.cleverapps.io/api/user', user);
  }

  getUser(name) {
    return this.http.get('http://simplechat-server.cleverapps.io/api/user/' + name);
  }

  getMessages() {
    return this.http.get('http://simplechat-server.cleverapps.io/api/messages/');
  }

  getUsers() {
    return this.http.get('http://simplechat-server.cleverapps.io/api/users/');
  }

}
