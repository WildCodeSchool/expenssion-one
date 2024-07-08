import { Component, inject } from '@angular/core';
import { Statistics } from '../../model/stats/statistics';
import { ApiDataService } from '../../service/api-data.service';
import { NgFor, NgIf } from '@angular/common';
import { ExternalExpr } from '@angular/compiler';
import { ExplainStatePageDesktopComponent } from '../explain-state-page-desktop/explain-state-page-desktop.component';

@Component({
  selector: 'app-stats-page',
  standalone: true,
  imports: [NgFor, ExplainStatePageDesktopComponent, NgIf],
  templateUrl: './stats-page.component.html',
  styleUrl: './stats-page.component.scss'
})
export class StatsPageComponent {
  statistiques:Statistics[] = [];

  points!:number;
  isHidden:boolean = true;

  apiService = inject(ApiDataService);

  generateScore(stat:Statistics){
    const max = 20;
    let score = Math.round(Math.random()*max);
    if(score >= 18) score = Math.round(score/2);
    this.statistiques.filter(x => x.name === stat.name)[0].score = score;
  }

  modifyScore(score:number):number{
    if(score == 20 || score == 19)
      score += 5;
    if(score == 18 || score == 17)
      score += 4;
    if(score == 16 || score == 15)
      score += 3;
    if(score == 14 || score == 13)
      score += 2;
    if(score == 12 || score == 11)
      score += 1;
    if(score == 9 || score == 8)
      score -= 1;
    if(score == 7 || score == 6)
      score -= 2;
    if(score == 5 || score == 4)
      score -= 3;
    if(score == 3 || score == 2)
      score -= 4;
    if(score == 1)
      score -= 5;
    return score;
  }

  scoreDown(name:String)
  {
    if(this.points < 5)
    {
      for(let i = 0; i < this.statistiques.length; i++)
      {
        if(this.statistiques[i].name === name)
        {
          this.statistiques[i].score -= 1;
          this.statistiques[i].differential -= 1;
          if(this.statistiques[i].differential > 0) 
            {
              this.statistiques[i].hidden = false;
            }
        }
      }
      this.points++;
    }
  }
  scoreUp(name:String)
  {
    if(this.points > 0)
    {
      for(let i = 0; i < this.statistiques.length; i++)
        {
          if(this.statistiques[i].name === name)
          {
            this.statistiques[i].score += 1;
            this.statistiques[i].differential += 1;
            if(this.statistiques[i].differential > 0) 
            {
              this.statistiques[i].hidden = false;
            }
            console.log(this.statistiques[i].name + " " + this.statistiques[i].differential);
          }
        }
      this.points--;
    }
  }

  ngOnInit()
  {
    
    this.points = 5;
    this.apiService.getStatistics().subscribe(
      statistiques => {
        this.statistiques = statistiques
        for(let i = 0; i < 10; i++)
          {
            
            this.statistiques[i].differential = 0;
            this.statistiques[i].score = 0;
            this.statistiques[i].hidden = true;
          }
      }
    )
  }
}
