import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

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
