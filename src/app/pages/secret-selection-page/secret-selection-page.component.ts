import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Secret } from '../../model/secret/secret';
import { SecretService } from '../../service/secrect/secret.service';

@Component({
  selector: 'app-secret-selection-page',
  standalone: true,
  imports: [MatTooltipModule,CommonModule,ReactiveFormsModule],
  templateUrl: './secret-selection-page.component.html',
  styleUrl: './secret-selection-page.component.scss'
})
export class SecretSelectionPageComponent {
  secretService=inject(SecretService)
  isGenerate:boolean=false
  isReset:boolean=false
  annecdoticSecret:Secret=new Secret(0,"");
  primordialSecret:Secret=new Secret(1,"")

  initializeSecrets(){
    this.secretService.getCharacterSecrets().subscribe(x=>{
      this.annecdoticSecret=x[0]
      this.annecdoticSecret=x[1]
    }
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
