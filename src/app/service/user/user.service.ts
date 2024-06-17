import { Injectable, inject } from '@angular/core';
import { User } from '../../model/user/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  http=inject(HttpClient)


  getUserData():Observable<User>{
    return this.http.get<User>("assets/data/user.json");
  }
}
