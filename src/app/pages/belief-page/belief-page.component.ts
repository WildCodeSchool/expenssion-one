import { Component, inject } from '@angular/core';
import { Belief } from '../../model/belief/belief';
import { ApiDataService } from '../../service/api-data.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-belief-page',
  standalone: true,
  imports: [NgFor],
  templateUrl: './belief-page.component.html',
  styleUrl: './belief-page.component.scss'
})
export class BeliefPageComponent {
  beliefs:Belief[] = [];
    apiDataService = inject(ApiDataService);

    ngOnInit()
    {
      this.apiDataService.getBeliefs().subscribe(
        belief => this.beliefs = belief
      );
    }
}
