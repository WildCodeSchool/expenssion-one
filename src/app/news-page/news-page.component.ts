import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../carousel/carousel.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
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
      title: 'Slide 1 Title',
      description: 'Description for Slide 1'
    },
    {
      image: 'assets/pictures/Blop.png',
      title: 'Slide 2 Title',
      description: 'Description for Slide 2'
    },
    {
      image: 'assets/background_pictures/register.jpg',
      title: 'Slide 3 Title',
      description: 'Description for Slide 3'
    }
  ];
}
