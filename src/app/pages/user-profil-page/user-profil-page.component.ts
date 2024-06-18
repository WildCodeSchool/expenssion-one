import { Component, inject } from '@angular/core';
import { User } from '../../model/user/user';
import { UserService } from '../../service/user/user.service';
import { CharacterService } from '../../service/character/character.service';


@Component({
  selector: 'app-user-profil-page',
  standalone: true,
  imports: [],
  templateUrl: './user-profil-page.component.html',
  styleUrl: './user-profil-page.component.scss'
})
export class UserProfilPageComponent {

  userService=inject(UserService)
  characterService=inject(CharacterService)
  user?:User;


  character: any = {};

  ngOnInit(){
    this.userService.getUserData().subscribe(x=>{this.user=x
      console.log(this.user)
    this.character}
    )
    
  }
  addCharacter(){
    this.characterService.addCharacter(this.character).subscribe()
  }

}
