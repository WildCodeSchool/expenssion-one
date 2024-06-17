import { Component, Inject, Input, inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { Login } from '../../model/login.model';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthentificationService } from '../../service/authentification/authentification.service';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, FormsModule, RouterOutlet,RouterLink],
  templateUrl: './pop-up-connexion.component.html',
  styleUrl: './pop-up-connexion.component.scss'
})
export class PopupComponent {
  @Input() isPopUpDisplay:boolean=false;
  login:Login=new Login("","");
  url:String="../../../assets/background_pictures/logo_blop_10001.png";

  @Input() dialogData :any=inject(MAT_DIALOG_DATA)
  authentificationService=inject(AuthentificationService)
  router=inject(Router)

  constructor(private dialogRef: MatDialogRef<PopupComponent>){
  }

  onClose() {
    this.dialogRef.close();
  }


 
   

  onLogin(username:string,password:string):void {
    this.authentificationService.login(username,password).subscribe(
      (response: any) => {
        console.log(response)
        if (response.access_token) {
          this.authentificationService.setToken(response.access_token);
          this.dialogRef.close();
          if(this.dialogData==="game"){
          this.router.navigateByUrl('/inscription');
        }
        this.onClose()
 
        } else {
          // Handle login error
          console.error('Login failed:', response.message);
        }
      },
      (error) => {
        // Handle login error
        console.error('Login failed:', error);
      },
    );
  }
  
}
