import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-news-character',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-character.component.html',
  styleUrl: './news-character.component.scss'
})
export class NewsCharacterComponent {
  slots = Array(12).fill(null); 

  scrollSlotsDown() {
    const slotsContainer = document.querySelector('.character-slots-container');
    if (slotsContainer) {
      slotsContainer.scrollBy({
        top: 100,
        behavior: 'smooth'
      });
    }
  }
}
