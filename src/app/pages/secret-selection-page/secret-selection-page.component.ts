import { Component, inject } from '@angular/core';
import { SecretService } from '../../service/secrect/secret.service';
import {MatTooltipModule} from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-secret-selection-page',
  standalone: true,
  imports: [MatTooltipModule,CommonModule],
  templateUrl: './secret-selection-page.component.html',
  styleUrl: './secret-selection-page.component.scss'
})
export class SecretSelectionPageComponent {
  secretService=inject(SecretService)
  isGenerate:boolean=false
  isReset:boolean=false

  initializeSecrets(){

    this.secretService.getCharacterSecrets().subscribe(

    )
    this.isGenerate=true
  }
  resetPrimordialSecret(){
    this.isReset=true
    this.secretService.resetPrimordialSecret().subscribe(

    )
  }

  resetSecondarySecret(){
    this.secretService.resetSecondarySecret().subscribe(
      
    )
    this.isReset=true
  }

  saveCharacter(){

  }

}
