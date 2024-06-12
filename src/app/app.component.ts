import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { ApiDataService } from './service/api-data.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})


export class AppComponent {
  title = 'angular-17-project-template';
  apiDataService=inject(ApiDataService)
  ngOnInit(){
    this.apiDataService.getSpecialization().subscribe(x=>console.log(x))
  }
}
