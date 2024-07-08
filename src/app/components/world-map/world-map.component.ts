import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-world-map',
  standalone: true,
  imports: [],
  templateUrl: './world-map.component.html',
  styleUrl: './world-map.component.scss'
})
export class WorldMapComponent {
  norta: boolean = false;
  nelm: boolean = false;
  isClickedNorta: boolean = false;
  isClickedNelm: boolean = false;
  conditionNorta: boolean = false;
  conditionNelm: boolean = false;
  
  constructor (private router: Router) {};

  onMouseEnterNorta(): void {
    if(!this.isClickedNorta) {
      this.norta = true;
      this.nelm = false;
    }
  }

  onMouseLeaveNorta(): void {
    if(!this.isClickedNorta && !this.isClickedNelm) {
    this.norta = false;
    }
    if(this.isClickedNelm && !this.isClickedNorta){
      this.nelm = true;
      this.norta = false;
    }
  }

  onMouseEnterNelm(): void {
    if(!this.isClickedNelm) {
    this.nelm = true;
    this.norta = false;
    }
  }

  onMouseLeaveNelm(): void {
    if(!this.isClickedNelm && !this.isClickedNorta) {
    this.nelm = false;
    }
    if(this.isClickedNorta && !this.isClickedNelm){
      this.norta = true;
      this.nelm = false;
    }
  }

  onClickNorta(): void {
    this.isClickedNorta = true;
    this.norta = true;
    this.isClickedNelm = false;
    this.nelm = false;
    this.conditionNorta = true;
  }

  onClickNelm(): void {
    this.isClickedNelm = true;
    this.nelm = true;
    this.isClickedNorta = false;
    this.norta = false;
    this.conditionNelm = true;
  }

  selectKingdom(): void {
    if (this.conditionNorta) {
    this.selectNorta();
    }
    if (this.conditionNelm) {
    this.selectNelm();
    }
  }

  selectNorta() {
    this.router.navigate(['/norta']);
  }

  selectNelm () {
    this.router.navigate(['/component-one']);
  }

}
