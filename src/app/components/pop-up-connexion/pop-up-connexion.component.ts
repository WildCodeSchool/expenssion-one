import { Component, Input } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { Login } from '../../model/login.model';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, FormsModule, RouterOutlet],
  templateUrl: './pop-up-connexion.component.html',
  styleUrl: './pop-up-connexion.component.scss'
})
export class PopupComponent {
  @Input() isPopUpDisplay:boolean=false;
  login:Login=new Login("","");
  url:String="../../../assets/background_pictures/logo_blop_10001.png";

  displayData()
  {
    console.log(this.login.login  + " " + this.login.password);
  }
}
