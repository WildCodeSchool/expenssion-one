import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Continent } from '../../model/continent/continent';

@Injectable({
  providedIn: 'root'
})
export class KingdomService {

    http=inject(HttpClient)
  url=environment.apiUrl

  constructor() { }

      getAllKingdom():Observable<Continent[]>{
    return this.http.get<Continent[]>(this.url+"/kingdoms")
  }

}
