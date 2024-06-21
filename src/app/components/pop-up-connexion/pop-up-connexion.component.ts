import { Component, Input, inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { Login } from '../../model/login.model';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, FormsModule, RouterOutlet,RouterLink],
  templateUrl: './pop-up-connexion.component.html',
  styleUrl: './pop-up-connexion.component.scss'
})
export class PopupComponent {
  login:Login=new Login("","");
  url:String="../../../assets/background_pictures/logo_blop_10001.png";

  @Input() dialogData :any=inject(MAT_DIALOG_DATA)
  router=inject(Router)

  constructor(private dialogRef: MatDialogRef<PopupComponent>){
  }

  onClose() {
    this.dialogRef.close();
  }
  
}
