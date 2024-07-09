import { Component, inject } from '@angular/core';
import { ApiDataService } from '../../service/api-data.service';
import { Secret } from '../../model/secret/secret';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-secrets-page',
  standalone: true,
  imports: [NgFor],
  templateUrl: './secrets-page.component.html',
  styleUrl: './secrets-page.component.scss'
})
export class SecretsPageComponent {
  apiService = inject(ApiDataService);
  primordialSecrets:Secret[] = [];
  anecdoticSecrets:Secret[] = [];
  ngOnInit()
  {
    this.apiService.getPrimordialSecrets().subscribe(
      x => this.primordialSecrets = x.filter(p => p.description.length > 0)
    );
    this.apiService.getAnecdoticSecrets().subscribe(
      x => this.anecdoticSecrets = x.filter(p => p.description.length > 0)
    );
  }
}
