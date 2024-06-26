import { Injectable, inject } from '@angular/core';
import { Specialization } from '../model/specialization/specialization';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Race } from '../model/race/race';
import { Continent } from '../model/continent/continent';
import { Secret } from '../model/secret/secret';
import { Statistiques } from '../model/stats/statistiques';
@Injectable({
  providedIn: 'root',
})
export class ApiDataService {
  private http = inject(HttpClient);

  constructor() {}

  getStatistiques(): Observable<Statistiques[]> {
    return this.http.get<Statistiques[]>('assets/data/statistics.json');
  }


  getSpecialization(): Observable<Specialization[]> {
    return this.http.get<Specialization[]>('assets/data/specialization.json');
  }

  getRaces(): Observable<Race[]> {
    return this.http.get<Race[]>('assets/data/race.json');
  }
  getContinents(): Observable<Continent[]> {
    return this.http.get<Continent[]>('assets/data/continents.json');
  }

  getAnecdoticSecrets():Observable<Secret[]>{
    return this.http.get<Secret[]>('assets/data/anecdoticSecrets.json')
  }

  getPrimordialSecrets():Observable<Secret[]>{
    return this.http.get<Secret[]>('assets/data/primordialSecrets.json')
  }
}
