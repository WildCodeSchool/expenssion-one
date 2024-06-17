import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
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

  constructor(public dialog: MatDialog) {}
  openDialog() {
    const dialogRef = this.dialog.open(PopupComponent, {maxWidth:"100vw"
    })};
}
