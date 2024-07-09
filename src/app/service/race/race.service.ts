import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Race } from '../../model/race/race';

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  
  http=inject(HttpClient)
  url=environment.apiUrl

  constructor() { }

      getAllRace():Observable<Race[]>{
    return this.http.get<Race[]>(this.url+"/races")
  }


}

