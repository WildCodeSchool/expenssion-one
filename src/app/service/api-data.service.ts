import { Injectable, inject } from '@angular/core';
import { Specialization } from '../model/specialization/specialization';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
  private http=inject(HttpClient)
  constructor() { }

  getSpecialization():Observable<Specialization[]>{
    return this.http.get<Specialization[]>('assets/data/specialization.json')
  }
}
