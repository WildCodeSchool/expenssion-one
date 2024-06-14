import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { PopupComponent } from '../pop-up-connexion/pop-up-connexion.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterLink, MatDialogModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isPopUpDisplay:boolean=false;
  constructor(public dialog: MatDialog) {}
  openDialog() {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '254px',
      height: '351px'
    });

    

    dialogRef.afterClosed().subscribe(result => {});
  }
}
