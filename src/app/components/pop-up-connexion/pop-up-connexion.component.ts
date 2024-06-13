import { Component } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { Login } from '../../model/login.model';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, FormsModule],
  templateUrl: './pop-up-connexion.component.html',
  styleUrl: './pop-up-connexion.component.scss'
})
export class PopupComponent {
  login:Login=new Login("","");
  url:String="../../../assets/background_pictures/logo_blop_10001.png";

  displayData()
  {
    console.log(this.login.login  + " " + this.login.password);
  }
}
