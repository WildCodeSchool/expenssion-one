import { Component, inject } from '@angular/core';
import { SecretService } from '../../service/secrect/secret.service';

@Component({
  selector: 'app-secret-selection-page',
  standalone: true,
  imports: [],
  templateUrl: './secret-selection-page.component.html',
  styleUrl: './secret-selection-page.component.scss'
})
export class SecretSelectionPageComponent {
  secretService=inject(SecretService)

  initializeSecrets(){
    this.secretService.getCharacterSecrets().subscribe(

    )
  }
  resetPrimordialSecret(){
    this.secretService.resetPrimordialSecret().subscribe(

    )
  }

  resetSecondarySecret(){
    this.secretService.resetSecondarySecret().subscribe(
      
    )
  }

}
