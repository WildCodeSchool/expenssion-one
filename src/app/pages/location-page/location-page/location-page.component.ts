import { Component } from '@angular/core';
import { ApiDataService } from '../../../service/api-data.service';

@Component({
  selector: 'app-location-page',
  standalone: true,
  imports: [],
  templateUrl: './location-page.component.html',
  styleUrl: './location-page.component.scss'
})
export class LocationPageComponent {
  data: any;

  constructor(private ApiDataService: ApiDataService) {}

  ngOnInit(): void {
    this.ApiDataService.getLocations().subscribe(response => {this.data = response})
  }
}
