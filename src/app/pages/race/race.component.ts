import { Component, inject } from '@angular/core';
import { Race } from '../../model/race/race';
import { RaceService } from '../../service/race/race.service';

@Component({
  selector: 'app-race',
  standalone: true,
  imports: [],
  templateUrl: './race.component.html',
  styleUrl: './race.component.scss',
})
export class RaceComponent {
  //déclare une propriété 'races' de type array objects 'Race'
  //Initialisation avec un array vide pour éviter les erreurs avant chargement des données
  races: Race[] = [];

  raceService = inject(RaceService)

  constructor() {}
  //Appel du service pour get data.race.json à l'initialisation du composant
  ngOnInit(): void {
    this.raceService.getAllRace().subscribe((response: Race[]) => {
      //Affecte les données récupérées à la propriété 'races'/and display data race.json from api-service
      this.races = response;
    });
  }
}
