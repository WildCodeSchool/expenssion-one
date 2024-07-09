import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Specialization } from '../model/specialization/specialization';

@Injectable({
  providedIn: 'root'
})
export class SpecializationService {


  http=inject(HttpClient)
  url=environment.apiUrl
  constructor() { }

    getAllSpecialization():Observable<Specialization[]>{
    return this.http.get<Specialization[]>(this.url+"/specializations")
  }
}
