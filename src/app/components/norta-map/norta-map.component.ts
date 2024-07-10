import { Component, inject } from '@angular/core';
import { City } from '../../model/city/city';
import { ApiDataService } from '../../service/api-data.service';

@Component({
  selector: 'app-norta-map',
  standalone: true,
  imports: [],
  templateUrl: './norta-map.component.html',
  styleUrl: './norta-map.component.scss'
})
export class NortaMapComponent {

  apiDataService: ApiDataService = inject(ApiDataService);
  norta!: any;
  cities!: City[];

  constructor() {}

  ngOnInit(): void {
    this.apiDataService.getContinents().subscribe((data) => {
      this.norta = data[1]
      this.cities = this.norta.regions.flatMap((region:any) => region.cities)
  })
  }

  selectedCity?: City;
  isClicked: boolean = false;
  
  onHover(cityName: string){
      this.selectedCity = this.cities.find(city => city.name === cityName)
      this.isClicked = false;
  }

  onClick(string: string){
    this.selectedCity = this.cities.find(city => city.name = string)
    this.isClicked = true;
  }

  onMouseLeave(){
  if(this.isClicked === false){
    this.selectedCity = new City();
  }
  }

}
