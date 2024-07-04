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

  norta: boolean = false;
  nelm: boolean = false;

  goBack(): void {
    this.location.back();
  }

  onMouseEnterNorta(): void {
    this.norta = true;
  }

  onMouseLeaveNorta(): void {
    this.norta = false;
  }

  onMouseEnterNelm(): void {
    this.nelm = true;
  }

  onMouseLeaveNelm(): void {
    this.nelm = false;
  }

}
