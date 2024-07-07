import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';
import { User } from '../../model/user/user';
import { AuthenticationService } from '../../service/authentication/authentification.service';
import { UserService } from '../../service/user/user.service';


@Component({
  selector: 'app-profil-parameter-page',
  standalone: true,
  imports: [FormsModule, MatSlideToggleModule],
  templateUrl: './profil-parameter-page.component.html',
  styleUrl: './profil-parameter-page.component.scss'
})
export class ProfilParameterPageComponent {

  isDelete:boolean=false;
  iserror:boolean=false;
   userService=inject(UserService)
   authentificationService=inject(AuthenticationService)
   router=inject(Router)

   user:User=new User("","string","string","string","string","string");
   ngOnInit(){
     this.userService.getUserData().subscribe(x=>{this.user=x
   }
    )
   }


    deleteUser(password:string):void{
      this.userService.deleteUser(password).subscribe(x=>{
      if(x=="User deleted"){
        this.router.navigate(['/accueil'])
      this.authentificationService.removeToken()
      }
      else{
        this.iserror=true
      }
      
      }

      )
    }

    updatePersonalData(firstname:string,lastname:string,email:string,dateOfBirth:string):void{
      this.userService.updatePersonalData(firstname,lastname,email,dateOfBirth).subscribe(x=>{this.user=x})
    }

    changePassword(oldPassword:string,newPassword:string):void{
      this.userService.changePassword(oldPassword,newPassword).subscribe(x=>{this.user=x})
    }

    updateBiography(biography:string):void{
      this.userService.updateBiography(biography).subscribe(x=>{this.user=x})
    }

    updateDisplayPseudo(displayPseudo:string):void{
      console.log(displayPseudo)
      this.userService.updateDisplayPseudo(displayPseudo).subscribe(x=>{this.user=x})
    }

    updateProfilPicture(profilPictureUrl:string):void{
      this.userService.updateProfilPicture(profilPictureUrl).subscribe(x=>{this.user=x})
    }

    updatepamarater(isPublic :boolean,isNewsletter:boolean):void{
      this.userService.updatepamarater(isPublic,isNewsletter).subscribe(x=>{this.user=x})
    }
  onSubmit(){}

}
