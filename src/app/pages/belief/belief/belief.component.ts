import { Component, inject } from '@angular/core';
import { Belief } from '../../../model/belief/belief';
import { ApiDataService } from '../../../service/api-data.service';

@Component({
  selector: 'app-belief',
  standalone: true,
  imports: [],
  templateUrl: './belief.component.html',
  styleUrl: './belief.component.scss'
})
export class BeliefComponent {
    beliefs:Belief[] = [];
    apiDataService = inject(ApiDataService);

    ngOnInit()
    {
      this.apiDataService.getBeliefs().subscribe(
        belief => this.beliefs = belief
      );
    }
}
