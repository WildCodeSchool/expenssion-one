import { Component, inject } from '@angular/core';
import { ApiDataService } from '../../service/api-data.service';
import { City } from '../../model/city/city';
import { Continent } from '../../model/continent/continent';
import { Region } from '../../model/region/region';

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

  constructor() {}

  ngOnInit(): void {
    this.apiDataService.getContinents().subscribe((data) => {this.norta = data)})
  }

  selectedCity?: City;

  isClicked: boolean = false;
  
  onHover(string: string){
    this.selectedCity = this.norta.regions.cities.find((city:any) => city.name = string)
    this.isClicked = false;
  }

  onClick(string: string){
    this.selectedCity = this.norta.find((city:any) => city.name = string)
    this.isClicked = true;
  }

  onMouseLeave(){
  if(this.isClicked === false){
    this.selectedCity = undefined;
  }
  }

}
