import { Component, inject } from '@angular/core';
import { Secret } from '../../model/secret/secret';
import { ApiDataService } from '../../service/api-data.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-anecdotic-secrets-page',
  standalone: true,
  imports: [NgFor],
  templateUrl: './anecdotic-secrets-page.component.html',
  styleUrl: './anecdotic-secrets-page.component.scss'
})
export class AnecdoticSecretsPageComponent {
    apiService = inject(ApiDataService);
    secrets:Secret[] = [];
    ngOnInit()
    {
      this.apiService.getAnecdoticSecrets().subscribe(
        x => this.secrets = x.filter(p => p.description.length > 0)
      );
    }
}
