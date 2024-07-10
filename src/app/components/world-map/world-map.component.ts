import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Router } from '@angular/router';
import { City } from '../../model/city/city';
import { Continent } from '../../model/continent/continent';
import { ApiDataService } from '../../service/api-data.service';

@Component({
  selector: 'app-world-map',
  standalone: true,
  imports: [],
  templateUrl: './world-map.component.html',
  styleUrl: './world-map.component.scss'
})
export class WorldMapComponent {

  @Output()
  sendNortaIsDisplayToParent: EventEmitter<boolean> = new EventEmitter();
  
  apiDataService: ApiDataService = inject(ApiDataService);

  constructor (private router: Router) {};

  continents!: Continent[];
  selectedContinent?: Continent;
  isClicked: boolean = false;
  
  onHover(continentName: string){
    this.selectedContinent = this.continents.find(continent => continent.name === continentName)
    this.isClicked = false;
  }

  onClick(string: string){
    this.selectedContinent = this.continents.find(continent => continent.name = string)
    this.isClicked = true;
    this.sendNortaIsDisplayToParent.emit(true);
  }

  onMouseLeave(){
  if(this.isClicked === false){
    this.selectedContinent = new Continent();
  }
  }

  ngOnInit(){
    this.apiDataService.getContinents().subscribe((data) => this.continents = data)
  }

}
