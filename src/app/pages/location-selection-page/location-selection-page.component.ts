import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WorldMapComponent } from '../../components/world-map/world-map.component';

@Component({
  selector: 'app-location-selection-page',
  standalone: true,
  imports: [RouterLink, WorldMapComponent],
  templateUrl: './location-selection-page.component.html',
  styleUrl: './location-selection-page.component.scss'
})
export class LocationSelectionPageComponent {

  constructor(private location: Location) { }

  goBack(): void {
    this.location.back();
  }

}
