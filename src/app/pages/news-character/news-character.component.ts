import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PersoServiceService } from '../../service/perso-service.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-character-selection',
    standalone: true,
  imports: [RouterLink, NgFor, NgIf],
  templateUrl: './news-character.component.html',
  styleUrls: ['./news-character.component.scss'],
 

})
export class NewsCharacterComponent {
  persoService = inject(PersoServiceService)

  @ViewChild('slotsWrapper', { static: true }) slotsWrapper!: ElementRef;

  scroll(direction: string) {
    const scrollAmount = 100; // Ajustez cette valeur selon vos besoins
    if (this.slotsWrapper && this.slotsWrapper.nativeElement) {
      const { nativeElement } = this.slotsWrapper;
      if (direction === 'up') {
        nativeElement.scrollTop -= scrollAmount;
      } else if (direction === 'down') {
        nativeElement.scrollTop += scrollAmount;
      }
    }
  }


}


