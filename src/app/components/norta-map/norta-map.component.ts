import { Component } from '@angular/core';

@Component({
  selector: 'app-norta-map',
  standalone: true,
  imports: [],
  templateUrl: './norta-map.component.html',
  styleUrl: './norta-map.component.scss'
})
export class NortaMapComponent {

  norta: boolean = false;
  nelm: boolean = false;
  isClickedNorta: boolean = false;
  isClickedNelm: boolean = false;
  
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
  }

  onClickNelm(): void {
    this.isClickedNelm = true;
    this.nelm = true;
    this.isClickedNorta = false;
    this.norta = false;
  }
}
