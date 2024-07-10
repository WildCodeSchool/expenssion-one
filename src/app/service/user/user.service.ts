import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { User } from '../../model/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  http=inject(HttpClient)
  url=environment.apiUrl

  constructor() { }


  getUserData(): Observable<User> {
  return this.http.get<User>(this.url+'/profil');
}

}
