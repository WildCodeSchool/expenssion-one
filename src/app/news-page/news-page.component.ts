import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../carousel/carousel.component';
@Component({
  selector: 'app-news-page',
  standalone: true,
  imports: [CommonModule, CarouselComponent],
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent {
  private apiUrl = 'http://your-api-url.com/news';
  slides = [
    { image: 'assets/news1.jpg', title: 'News Title 1', description: 'Lorem ipsum dolor sit amet. Sit autem nemo in minus quas nam itaque minima sed dicta atque.' },
    { image: 'assets/news2.jpg', title: 'News Title 2', description: 'Lorem ipsum dolor sit amet. Sit autem nemo in minus quas nam itaque minima sed dicta atque.' },
    { image: 'assets/news3.jpg', title: 'News Title 3', description: 'Lorem ipsum dolor sit amet. Sit autem nemo in minus quas nam itaque minima sed dicta atque.' }
  ];
  newsItems: NewsItem[] = [];

  constructor(private http: HttpClient) {
    this.getNews().subscribe(news => this.newsItems = news);
  }

  getNews(): Observable<NewsItem[]> {
    return this.http.get<NewsItem[]>(this.apiUrl);
  }
}

interface NewsItem {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
}


