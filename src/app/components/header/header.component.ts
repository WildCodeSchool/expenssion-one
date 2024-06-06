import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatExpansionModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isShowJeu: boolean = false;
  panelOpenState: boolean = false;
  isShowGlossaire: boolean = false;
}
