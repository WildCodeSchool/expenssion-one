import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-character-selection',
  templateUrl: './news-character.component.html',
  styleUrls: ['./news-character.component.scss']
})
export class NewsCharacterComponent {
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


