import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-mobile',
  standalone: true,
  imports: [RouterOutlet,CommonModule,RouterLink],
  templateUrl: './header-mobile.component.html',
  styleUrl: './header-mobile.component.scss'
})
export class HeaderMobileComponent {

  isMobileSideNavOpen:boolean=false

  toggle(){
    this.isMobileSideNavOpen=!this.isMobileSideNavOpen;

  }

  constructor(private router: Router) {}

  navigateToSection(sectionId: string) {
    this.router.navigate(['/regles'], { fragment: sectionId });
  }

}
