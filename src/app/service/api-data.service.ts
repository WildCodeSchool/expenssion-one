import { Injectable, inject } from '@angular/core';
import { Specialization } from '../model/specialization/specialization';
import { Locations } from '../model/locations/locations';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Race } from '../model/race/race';
@Injectable({
  providedIn: 'root',
})
export class ApiDataService {
  private http = inject(HttpClient);
  constructor() {}

  getSpecialization(): Observable<Specialization> {
    return this.http.get<Specialization>('assets/data/specialization.json');
  }

  getLocations(): Observable<Locations> {
    return this.http.get<Locations>('assets/data/continents.json');
  }

  getRaces(): Observable<Race[]> {
    return this.http.get<Race[]>('assets/data/race.json');
  }
}
