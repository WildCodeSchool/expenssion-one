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
  races: Race[] = [];
  // apiDataService: ApiDataService = inject(ApiDataService);

  constructor(private ApiDataService: ApiDataService) {}
  //get and display data race.json from api-service
  ngOnInit(): void {
    this.ApiDataService.getRaces().subscribe((response) => {
      this.races = response;
    });
  }
}
