import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../pop-up-connexion/pop-up-connexion.component';
import { AuthenticationService } from '../../service/authentication/authentification.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-header-mobile',
  standalone: true,
  imports: [RouterOutlet,CommonModule,RouterLink],
  templateUrl: './header-mobile.component.html',
  styleUrl: './header-mobile.component.scss'
})
export class HeaderMobileComponent {

  authenticationService=inject(AuthenticationService)


  isLogin$:Observable<Boolean>=this.authenticationService.isLogin$
  router=inject(Router)
  isMobileSideNavOpen:boolean=false

  
  toggle(){
    this.isMobileSideNavOpen=!this.isMobileSideNavOpen;
  }

  constructor(public dialog: MatDialog) {}
  
  openDialog() {
    const dialogRef = this.dialog.open(PopupComponent, {maxWidth:"100vw"
    })
    };


    openDialogConnection() {
    const dialogRef = this.dialog.open(PopupComponent, {maxWidth:"100vw",
    });
    dialogRef.afterClosed().subscribe(result => {});
  }

  onLogout():void{
    this.authenticationService.removeToken();
    this.router.navigateByUrl("/")
  }


}
