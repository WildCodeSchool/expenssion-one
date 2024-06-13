import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { Login } from '../../model/login.model';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pop-up-mobile',
  standalone: true,
  imports: [FormsModule, RouterOutlet],
  templateUrl: './pop-up-mobile.component.html',
  styleUrl: './pop-up-mobile.component.scss'
})
export class PopUpMobileComponent {
  login:Login=new Login("","");
  url:String="../../../assets/background_pictures/logo_blop_10001.png";

  displayData()
  {
    console.log(this.login.login  + " " + this.login.password);
  }

}
