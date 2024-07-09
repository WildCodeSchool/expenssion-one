import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Secret } from '../../model/secret/secret';

@Injectable({
  providedIn: 'root'
})
export class SecretService {

    http=inject(HttpClient)
  url=environment.apiUrl

  constructor() { }

  getAllSecrets():Observable<Secret[]>{
    return this.http.get<Secret[]>(this.url+"/getAllSecrets")
  }

  getAllPrimordialSecrets():Observable<Secret[]>{
    return this.http.get<Secret[]>(this.url+"/primordial-secrets/all")
  }

  getAllAnecdoticSecrets():Observable<Secret[]>{
    return this.http.get<Secret[]>(this.url+"/anecdotic-secrets/all")
  }

  getCharacterSecrets():Observable<Secret[]>{
    return this.http.get<Secret[]>(this.url+"/getCharacterSecrets")
  }

  resetPrimordialSecret():Observable<Secret>{
    return this.http.get<Secret>(this.url+"/resetPrimordialSecret")
  }
  resetSecondarySecret():Observable<Secret>{
    return this.http.get<Secret>(this.url+"/resetSecondarySecret")
  }
}
