import { Component, inject } from '@angular/core';
import { Continent } from '../../model/continent/continent';
import { KingdomService } from '../../service/kingdom/kingdom.service';

@Component({
  selector: 'app-location-page',
  standalone: true,
  imports: [],
  templateUrl: './location-page.component.html',
  styleUrl: './location-page.component.scss'
})
export class LocationPageComponent {
  kingdomService = inject(KingdomService);
  continents: Continent[] = [];

  constructor() {}

  ngOnInit(): void {
    this.kingdomService.getAllKingdom().subscribe((data) => this.continents = data)
  }
}
