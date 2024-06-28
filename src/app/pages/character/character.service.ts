import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  http=inject(HttpClient)
  url=environment.apiUrl

  constructor() { }

  addCharacter(user:any):Observable<any>{
    return this.http.put<any>(this.url+'/addCharacter',user)
  }
}
