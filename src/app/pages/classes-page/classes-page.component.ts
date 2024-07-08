import { Component, inject } from '@angular/core';
import { Statistics } from '../../model/stats/statistics';
import { ApiDataService } from '../../service/api-data.service';
import { Specialization } from '../../model/specialization/specialization';
import { NgFor, NgStyle } from '@angular/common';

@Component({
  selector: 'app-classes-page',
  standalone: true,
  imports: [NgFor, NgStyle],
  templateUrl: './classes-page.component.html',
  styleUrl: './classes-page.component.scss'
})
export class ClassesPageComponent {
  statistiques:Statistics[] = [];
  classes:Specialization[] = [];
  filterClasses:Specialization[] = [];

  selectedClass!:Specialization;



  count:number = 0;

  points!:number;

  apiService = inject(ApiDataService);

  changePic(name:String)
  {
    this.selectedClass = this.classes.filter(p => p.name === name)[0];
  }

  getIndexFromSelected():number
  {
    let index = 0;
     for(let i = 0; i < this.classes.length; i++)
     {
      if(this.classes[i].name == this.selectedClass.name)
      {
        index = i;
      }
     }
     return index;
  }

  incrementCount()
  {
    this.count++;
    for(let i  = (0 + this.count); i < (4+this.count); i++)
      {
        this.filterClasses[i-this.count] = this.classes[i];
      }
      let index = this.getIndexFromSelected();
      if(index + 1 < this.classes.length)
      this.selectedClass = this.classes[index + 1];
  }

  decrementCount()
  {
    if(this.count > 0)
    {
      this.count--;
      for(let i  = (0 + this.count); i < (4+this.count); i++)
      {
        this.filterClasses[i-this.count] = this.classes[i];
      }
    }
    let index = this.getIndexFromSelected();
    if(index - 1 > 0)
    this.selectedClass = this.classes[index - 1];
  }

  ngOnInit()
  {
    this.points = 5;
    this.selectedClass = new Specialization();
    this.apiService.getSpecialization().subscribe(
      classes => 
        {
          this.classes = classes;
          for(let i  = 0; i < 4; i++)
          {
            this.filterClasses[i] = this.classes[i];
          }
          this.selectedClass = this.classes[0];
        }
    );
    
    this.apiService.getStatistics().subscribe(
      statistiques => {
        this.statistiques = statistiques
        for(let i = 0; i < 10; i++)
          {
            const max = 20;
            let score = Math.round(Math.random()*max);
            if(score >= 18) score = Math.round(score/2);
              this.statistiques[i].score = score;
          }
      }
    )
  }
}
