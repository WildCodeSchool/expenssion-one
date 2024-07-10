import { Component, inject, Output } from '@angular/core';
import { Continent } from '../../model/continent/continent';
import { ApiDataService } from '../../service/api-data.service';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-world-map-mobile',
  standalone: true,
  imports: [],
  templateUrl: './world-map-mobile.component.html',
  styleUrl: './world-map-mobile.component.scss'
})
export class WorldMapMobileComponent {
  
  apiDataService: ApiDataService = inject(ApiDataService);
  continents!: Continent[];
  selectedContinent?: Continent;
  isClicked: boolean = false;

  constructor() {}
  
  onHover(continentName: string){
    this.selectedContinent = this.continents.find(continent => continent.name === continentName)
    this.isClicked = false;
  }

  onClick(string: string){
    this.selectedContinent = this.continents.find(continent => continent.name = string)
    this.isClicked = true;
  }

  onMouseLeave(){
  if(this.isClicked === false){
    this.selectedContinent = new Continent();
  }
  }

   ngOnInit(): void {
    this.apiDataService.getContinents().subscribe((data) => {
      this.continents = this.continents.flatMap((continent:any) => continent)
  })
  }

}

