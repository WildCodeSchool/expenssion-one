import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';

import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { Secret } from '../../model/secret/secret';
import { SecretService } from '../../service/secrect/secret.service';
import { PersoServiceService } from '../../service/perso-service.service';

@Component({
  selector: 'app-secret-selection-page',
  standalone: true,
  imports: [MatTooltipModule, CommonModule, ReactiveFormsModule],
  templateUrl: './secret-selection-page.component.html',
  styleUrl: './secret-selection-page.component.scss',
})
export class SecretSelectionPageComponent {

  persoService = inject(PersoServiceService);

  secretService = inject(SecretService);
  isGenerate: boolean = false;
  isReset: boolean = false;
  annecdoticSecret: Secret = new Secret(0, '');
  primordialSecret: Secret = new Secret(1, '');
  router = inject(Router);

  initializeSecrets() {
    this.secretService.getRandomAnnecdoticSecret().subscribe((x) => {
      this.annecdoticSecret = x;
    });
    this.secretService.getRandomPrimordialSecret().subscribe((x) => {
      this.primordialSecret = x;
    });
    this.isGenerate = true;
  }
  resetPrimordialSecret() {
    this.secretService.getRandomPrimordialSecret().subscribe((x) => {
      this.primordialSecret = x;
    });

    this.isReset = true;
  }

  resetSecondarySecret() {
    this.secretService.getRandomAnnecdoticSecret().subscribe((x) => {
      this.annecdoticSecret = x;
    });
    this.isReset = true;
  }


  saveCharacter(){

    this.persoService.anecdoticSecret = this.annecdoticSecret;
    this.persoService.primordialSecret = this.primordialSecret;

    this.router.navigateByUrl('/creation-personnage/statistiques')

  }
}
