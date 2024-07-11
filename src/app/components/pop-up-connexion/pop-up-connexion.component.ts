
import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Login } from '../../model/login.model';
import { AuthenticationService } from '../../service/authentication/authentification.service';


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

  authenticationService=inject(AuthenticationService)
  router=inject(Router)

  constructor(private dialogRef: MatDialogRef<PopupComponent>){
  }

  onClose() {
    this.dialogRef.close();

  }


 
   


  onLogin(username:string,password:string):void {
    this.authenticationService.login(username,password).subscribe(
      (response: any) => {
        if (response.access_token) {
          this.authenticationService.setToken(response.access_token);
          this.dialogRef.close();
          if(this.dialogData==="game"){
          this.router.navigateByUrl('/creation-personnage');
        }
        this.onClose()
 
        } else {
        }
      },
      (error) => {
      },
    );
  }
  }
  

