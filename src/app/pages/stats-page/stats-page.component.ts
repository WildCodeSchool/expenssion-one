import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Statistics } from '../../model/stats/statistics';
import { ApiDataService } from '../../service/api-data.service';
import { ExplainStatePageDesktopComponent } from '../explain-state-page-desktop/explain-state-page-desktop.component';

@Component({
  selector: 'app-stats-page',
  standalone: true,
  imports: [NgFor, ExplainStatePageDesktopComponent],
  templateUrl: './stats-page.component.html',
  styleUrl: './stats-page.component.scss'
})
export class StatsPageComponent {
  statistiques:Statistics[] = [];

  points!:number;
  router=inject(Router)
  apiService = inject(ApiDataService);

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
          this.statistiques[i].score -= 1;
      }
      this.points++;
    }
  }


  validateStats(){
    this.router.navigateByUrl('/creation-personnage/lieux')
  }


  scoreUp(name:String)
  {
    if(this.points > 0)
    {
      for(let i = 0; i < this.statistiques.length; i++)
        {
          if(this.statistiques[i].name === name)
            this.statistiques[i].score += 1;
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
            const max = 20;
            let score = Math.round(Math.random()*max);
            if(score >= 18) score = Math.round(score/2);
              this.statistiques[i].score = score;
          }
      }
    )
  }
}
