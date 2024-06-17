import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { PopupComponent } from '../pop-up-connexion/pop-up-connexion.component';
import { AuthentificationService } from '../../service/authentification/authentification.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterLink, MatDialogModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isPopUpDisplay:boolean=false;
  authentificationService=inject(AuthentificationService)

  isLogin$:Observable<Boolean>=this.authentificationService.isLogin$

  constructor(public dialog: MatDialog) {}





  ngOnInit(): void {


  }





  openDialogGame() {
    const dialogRef = this.dialog.open(PopupComponent, {maxWidth:"100vw",
      data:"game"
    });
    dialogRef.afterClosed().subscribe(result => {});
  }

  openDialogConnection() {
    const dialogRef = this.dialog.open(PopupComponent, {maxWidth:"100vw",
    });
    dialogRef.afterClosed().subscribe(result => {});
  }

  onLogout():void{
    this.authentificationService.removeToken();
  }

  isLogin():boolean{
    return this.authentificationService.getToken()!==null
  }


}
