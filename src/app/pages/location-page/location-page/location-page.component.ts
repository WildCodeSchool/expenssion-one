import { Component, inject } from '@angular/core';
import { ApiDataService } from '../../../service/api-data.service';
import { Continent } from '../../../model/continent/continent';

@Component({
  selector: 'app-location-page',
  standalone: true,
  imports: [],
  templateUrl: './location-page.component.html',
  styleUrl: './location-page.component.scss'
})
export class LocationPageComponent {
  apiDataService: ApiDataService = inject(ApiDataService);
  continents: Continent[] = [];

  constructor() {}

  ngOnInit(): void {
    this.apiDataService.getContinents().subscribe((data) => this.continents = data)
    console.log(this.continents)
  }
}
