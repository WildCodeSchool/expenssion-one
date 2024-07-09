import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Secret } from '../../model/secret/secret';
import { SecretService } from '../../service/secrect/secret.service';

@Component({
  selector: 'app-secrets-page',
  standalone: true,
  imports: [NgFor],
  templateUrl: './secrets-page.component.html',
  styleUrl: './secrets-page.component.scss'
})
export class SecretsPageComponent {
  secretService = inject(SecretService);
  primordialSecrets:Secret[] = [];
  anecdoticSecrets:Secret[] = [];
  ngOnInit()
  {
    this.secretService.getAllPrimordialSecrets().subscribe(
      x => this.primordialSecrets = x.filter(p => p.description.length > 0)
    );
    this.secretService.getAllAnecdoticSecrets().subscribe(
      x => this.anecdoticSecrets = x.filter(p => p.description.length > 0)
    );
  }
}
