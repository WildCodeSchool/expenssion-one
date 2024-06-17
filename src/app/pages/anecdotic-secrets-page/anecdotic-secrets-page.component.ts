import { Component, inject } from '@angular/core';
import { Secret } from '../../model/secret/secret';
import { ApiDataService } from '../../service/api-data.service';
import { NgFor } from '@angular/common';
import { anecdoticSecrets } from '../../../assets/data/anecdoticSecrets';

@Component({
  selector: 'app-anecdotic-secrets-page',
  standalone: true,
  imports: [NgFor],
  templateUrl: './anecdotic-secrets-page.component.html',
  styleUrl: './anecdotic-secrets-page.component.scss'
})
export class AnecdoticSecretsPageComponent {
    secrets:Secret[] = [];
    ngOnInit()
    {
      this.secrets = anecdoticSecrets.filter(secret => secret.description.length > 0);
    }
}
