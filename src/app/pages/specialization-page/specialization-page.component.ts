import { Component, inject } from '@angular/core';
import { Specialization } from '../../model/specialization/specialization';
import { SpecializationService } from '../../service/specialization.service';

@Component({
  selector: 'app-specialization-page',
  standalone: true,
  imports: [],
  templateUrl: './specialization-page.component.html',
  styleUrl: './specialization-page.component.scss'
})
export class SpecializationPageComponent {
  specializationService=inject(SpecializationService)
  specializations:Specialization[]=[];
  ngOnInit(){
    this.specializationService.getAllSpecialization().subscribe(x=>{
      console.log(x)
      this.specializations=x})
  }

}
