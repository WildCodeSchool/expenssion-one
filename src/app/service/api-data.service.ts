import { Injectable, inject } from '@angular/core';
import { Specialization } from '../model/specialization/specialization';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Race } from '../model/race/race';
import { Continent } from '../model/continent/continent';
@Injectable({
  providedIn: 'root',
})
export class ApiDataService {
  private http = inject(HttpClient);

  constructor() {}

  getSpecialization(): Observable<Specialization> {
    return this.http.get<Specialization>('assets/data/specialization.json');
  }

  getRaces(): Observable<Race[]> {
    return this.http.get<Race[]>('assets/data/race.json');
  }
  getContinents(): Observable<Continent[]> {
    return this.http.get<Continent[]>('assets/data/continents.json');
  }
}
