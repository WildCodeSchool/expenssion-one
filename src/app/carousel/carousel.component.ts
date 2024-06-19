import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  @Input() slides: { image: string, title: string, description: string }[] = [];
  currentIndex = 0;

  previousSlide() {
    console.log('Previous Slide Clicked'); // Log pour vérifier le clic
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.slides.length - 1;
    console.log('Current Index:', this.currentIndex); // Log pour vérifier l'index actuel
  }

  nextSlide() {
    console.log('Next Slide Clicked'); // Log pour vérifier le clic
    this.currentIndex = (this.currentIndex < this.slides.length - 1) ? this.currentIndex + 1 : 0;
    console.log('Current Index:', this.currentIndex); // Log pour vérifier l'index actuel
  }
}


