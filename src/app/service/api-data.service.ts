import { Injectable, inject } from '@angular/core';
import { Specialization } from '../model/specialization/specialization';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Continent } from '../model/continent/continent';
import { Secret } from '../model/secret/secret';
@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
  private http=inject(HttpClient)
  constructor() { }

  getSpecialization():Observable<Specialization[]>{
    return this.http.get<Specialization[]>('assets/data/specialization.json')
  }

  getContinents():Observable<Continent[]>{
    return this.http.get<Continent[]>('assets/data/continents.json')
  }

  getAnecdoticSecrets():Observable<Secret[]>{
    return this.http.get<Secret[]>('assets/data/anecdoticSecrets.json')
  }

  getPrimordialSecrets():Observable<Secret[]>{
    return this.http.get<Secret[]>('assets/data/primordialSecrets.json')
  }
}
