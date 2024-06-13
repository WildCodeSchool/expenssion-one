import { Component, inject } from '@angular/core';
import { ApiDataService } from '../../../service/api-data.service';
import { Locations } from '../../../model/locations/locations';

@Component({
  selector: 'app-location-page',
  standalone: true,
  imports: [],
  templateUrl: './location-page.component.html',
  styleUrl: './location-page.component.scss'
})
export class LocationPageComponent {
  apiDataService: ApiDataService = inject(ApiDataService);
  locations: Locations[] = [];

  constructor() {}

  ngOnInit(): void {
    this.apiDataService.getLocations().subscribe((data) => console.log(data))
  }
}
