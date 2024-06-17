import { Component, inject } from '@angular/core';
import { User } from '../../model/user/user';


@Component({
  selector: 'app-user-profil-page',
  standalone: true,
  imports: [],
  templateUrl: './user-profil-page.component.html',
  styleUrl: './user-profil-page.component.scss'
})
export class UserProfilPageComponent {

 // userService=inject(UserService)
  user?:User;

  ngOnInit(){
    //this.userService.getUserData().subscribe(x=>this.user=x)
  }

}
