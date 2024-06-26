import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../service/user/user.service';
import { User } from '../../model/user/user';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-profil-parameter-page',
  standalone: true,
  imports: [FormsModule, MatSlideToggleModule],
  templateUrl: './profil-parameter-page.component.html',
  styleUrl: './profil-parameter-page.component.scss'
})
export class ProfilParameterPageComponent {


   userService=inject(UserService)

   user:User=new User("","string","string","string","string","string");
   ngOnInit(){

     this.userService.getUserData().subscribe(x=>{this.user=x
   }
    )

   }
  onSubmit(){}

}
