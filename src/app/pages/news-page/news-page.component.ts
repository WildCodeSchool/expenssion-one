import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
@Component({
  selector: 'app-news-page',
  standalone: true,
  imports: [CommonModule, CarouselComponent, HeaderComponent, FooterComponent],
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent {
  slides = [
    {
      image: 'assets/pictures/Image article.png',
      title: 'Slide 1 Titre',
      description: 'Description du Slide 1'
    },
    {
      image: '/assets/background_pictures/glossary_background.png',
      title: 'Slide 2 Titre',
      description: 'Description du Slide 2'
    },
    {
      image: 'assets/background_pictures/register.jpg',
      title: 'Slide 3 Titre',
      description: 'Description du Slide 3'
    }
  ];
}
