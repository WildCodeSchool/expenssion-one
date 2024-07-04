import { Component, inject } from '@angular/core';
import { User } from '../../model/user/user';
import { RouterLink } from '@angular/router';
import { UserService } from '../../service/user/user.service';
import { CharacterService } from '../character/character.service';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import timeGridPlugin from '@fullcalendar/timegrid';
import { Router } from 'express';


@Component({
  selector: 'app-user-profil-page',
  standalone: true,
  imports: [FullCalendarModule,RouterLink],
  templateUrl: './user-profil-page.component.html',
  styleUrl: './user-profil-page.component.scss'
})
export class UserProfilPageComponent {

  userService=inject(UserService)
  characterService=inject(CharacterService)
  user?:User;


  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, timeGridPlugin],
    events: [
      { title: 'Game day', date: '2024-06-20' },
      { title: 'Fête de la musique', date: '2024-06-21' }
    ],
    height: "40vh"
       };


  character: any = {};

  ngOnInit(){
    this.userService.getUserData().subscribe(x=>{this.user=x
    this.character}
    )
    
  }
  addCharacter(){
    this.characterService.addCharacter(this.character).subscribe()
  }

}
