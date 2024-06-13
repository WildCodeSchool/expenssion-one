import { Component, inject } from '@angular/core';
import { ApiDataService } from '../../service/api-data.service';
import { Specialization } from '../../model/specialization/specialization';

@Component({
  selector: 'app-specialization-page',
  standalone: true,
  imports: [],
  templateUrl: './specialization-page.component.html',
  styleUrl: './specialization-page.component.scss'
})
export class SpecializationPageComponent {
  apiDataService=inject(ApiDataService)
  specializations:Specialization[]=[];
  ngOnInit(){
    this.apiDataService.getSpecialization().subscribe(x=>this.specializations=x)
  }

}
