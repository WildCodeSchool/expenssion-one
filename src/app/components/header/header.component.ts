import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatExpansionModule, CommonModule,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isShowJeu: boolean = false;
  isShowGlossaire: boolean = false;
  isSubMenuHover: boolean = false;
  isLeftNavHover: boolean = false;




  changeGlossaire() {
    this.isShowGlossaire = true;
    if (this.isShowJeu == true) {
      this.isShowJeu = false
    }
  }

  changeJeu() {
    this.isShowJeu = true;
    if (this.isShowGlossaire == true) {
      this.isShowGlossaire = false
    }

  }
}
