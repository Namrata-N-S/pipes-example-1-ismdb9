import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from './users';

@Injectable()
export class UserDetailsService {
  constructor(private http: HttpClient) {}
  url = 'https://jsonplaceholder.typicode.com/todos';

  getUsers(): Observable<Users> {
    return this.http.get<Users>(this.url);
  }
}
