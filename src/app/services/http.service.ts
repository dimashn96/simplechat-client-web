import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()

export class HttpService {

  constructor(private http: HttpClient) {
  }

  addUser(user) {
    return this.http.put('http://localhost:3000/api/user', user);
  }

  getUser(name) {
    return this.http.get('http://localhost:3000/api/user/' + name);
  }

  getMessages() {
    return this.http.get('http://localhost:3000/api/messages/');
  }

}
