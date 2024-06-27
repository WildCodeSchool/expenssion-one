import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-character-selection',
  templateUrl: './news-character.component.html',
  styleUrls: ['./news-character.component.scss']
})
export class NewsCharacterComponent {
  @ViewChild('slotsWrapper', { static: true }) slotsWrapper!: ElementRef;

  scroll(direction: string) {
    const scrollAmount = 100;
    if (direction === 'up') {
      this.slotsWrapper.nativeElement.scrollBy({
        top: -scrollAmount,
        behavior: 'smooth'
      });
    } else if (direction === 'down') {
      this.slotsWrapper.nativeElement.scrollBy({
        top: scrollAmount,
        behavior: 'smooth'
      });
    }
  }
}

