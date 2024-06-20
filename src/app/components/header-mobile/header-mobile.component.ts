import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../pop-up-connexion/pop-up-connexion.component';

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

  router = inject(Router);

  navigateToSection(sectionId: string) {
    this.router.navigate(['/regles'], { fragment: sectionId });
  }

  constructor(public dialog: MatDialog) {}
  openDialog() {
    const dialogRef = this.dialog.open(PopupComponent)};
}
