import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-location-selection-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './location-selection-page.component.html',
  styleUrl: './location-selection-page.component.scss'
})
export class LocationSelectionPageComponent {

  constructor(private location: Location) { }

  goBack() {
    this.location.back();
  }

  onMouseEnter() {
    console.log("mouse enter");
    
  }
}
