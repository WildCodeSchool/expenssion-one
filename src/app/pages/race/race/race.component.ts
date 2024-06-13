import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../../../service/api-data.service';
import { Race } from '../../../model/race/race';
import { response } from 'express';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-race',
  standalone: true,
  imports: [],
  templateUrl: './race.component.html',
  styleUrl: './race.component.scss',
})
export class RaceComponent {
  //déclare une propriété 'aces' de type array objects 'Race'
  //Initialisation avec un array vide pour éviter les erreurs avant chargement des données
  races: Race[] = [];
  // apiDataService: ApiDataService = inject(ApiDataService)?;

  constructor(private ApiDataService: ApiDataService) {}
  //Appel du service pour get data.race.json à l'initialisation du composant
  ngOnInit(): void {
    this.ApiDataService.getRaces().subscribe((response) => {
      //Affecte les données récupérées à la propriété 'races'/and display data race.json from api-service
      this.races = response;
    });
  }
}
