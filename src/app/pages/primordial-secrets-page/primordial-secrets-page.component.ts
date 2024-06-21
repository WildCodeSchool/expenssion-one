import { Component, inject } from '@angular/core';
import { ApiDataService } from '../../service/api-data.service';
import { Secret } from '../../model/secret/secret';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-primordial-secrets-page',
  standalone: true,
  imports: [NgFor],
  templateUrl: './primordial-secrets-page.component.html',
  styleUrl: './primordial-secrets-page.component.scss'
})
export class PrimordialSecretsPageComponent {
  apiService = inject(ApiDataService);
  secrets:Secret[] = [];
  ngOnInit()
  {
    this.apiService.getPrimordialSecrets().subscribe(
      x => this.secrets = x.filter(p => p.description.length > 0)
    );
  }
}
