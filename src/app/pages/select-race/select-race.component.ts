import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Race } from '../../model/race/race';
import { ApiDataService } from '../../service/api-data.service';
import { PersoServiceService } from '../../service/perso-service.service';

@Component({
  selector: 'app-select-race',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './select-race.component.html',
  styleUrl: './select-race.component.scss'
})
export class SelectRaceComponent {


  
  raceService=inject(ApiDataService)
  races:Race[]=[]
  router=inject(Router)

  persoService = inject(PersoServiceService);

   currentIndex: number = 0;

  ngOnInit() {
    this.raceService.getRaces().subscribe(x=>{
      this.races=x
  })
}

    get currentRace(): Race {
    return this.races[this.currentIndex];
  }

  prev() {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.races.length - 1;
  }

  next() {
    this.currentIndex = (this.currentIndex < this.races.length - 1) ? this.currentIndex + 1 : 0;
  }
  saveRace(){
    this.persoService.race = this.races[this.currentIndex];
    this.router.navigateByUrl('/creation-personnage/lieux')
  }


}
