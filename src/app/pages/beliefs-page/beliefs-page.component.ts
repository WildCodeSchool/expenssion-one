import { Component } from '@angular/core';
import { ApiDataService } from '../../service/api-data.service';
import { Belief } from '../../model/belief/belief';

@Component({
  selector: 'app-beliefs-page',
  standalone: true,
  imports: [],
  templateUrl: './beliefs-page.component.html',
  styleUrl: './beliefs-page.component.scss',
})
export class BeliefsPageComponent {
  //déclare une propriété 'beliefs' de type array objects 'Belief'
  //Initialisation avec un array vide pour éviter les erreurs avant chargement des données
  beliefs: Belief[] = [];

  constructor(private ApiDataService: ApiDataService) {}
  //Appel du service pour get data.race.json à l'initialisation du composant
  ngOnInit(): void {
    this.ApiDataService.getBeliefs().subscribe((response: Belief[]) => {
      //Affecte les données récupérées à la propriété 'races'/and display data race.json from api-service
      this.beliefs = response;
    });
  }
}
