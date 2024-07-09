import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../service/authentication/authentification.service';
import { PopupComponent } from '../pop-up-connexion/pop-up-connexion.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatDialogModule,
    MatButtonModule,
    RouterOutlet,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isPopUpDisplay: boolean = false;
  authenticationService = inject(AuthenticationService);

  isLogin$: Observable<Boolean> = this.authenticationService.isLogin$;

  router = inject(Router);
  constructor(public dialog: MatDialog) {}

  openDialogGame() {
    const dialogRef = this.dialog.open(PopupComponent, {
      maxWidth: '100vw',
      data: 'game',
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }

  openDialogConnection() {
    const dialogRef = this.dialog.open(PopupComponent, { maxWidth: '100vw' });
    dialogRef.afterClosed().subscribe((result) => {});
  }

  onLogout(): void {
    console.log("here")
    this.authenticationService.removeToken();
    this.router.navigateByUrl('/');
  }
}
