import { Injectable } from '@angular/core';
import { Secret } from '../model/secret/secret';
import { Statistics } from '../model/stats/statistics';
import { Specialization } from '../model/specialization/specialization';
import { Race } from '../model/race/race';

@Injectable({
  providedIn: 'root'
})
export class PersoServiceService {
  anecdoticSecret!:Secret;
  primordialSecret!:Secret;
  statistiques:Statistics[] = [];
  classe!:Specialization;
  race!:Race;
  isNorta:boolean | null = null;

  constructor() { }
}
