import { Title } from "@angular/platform-browser";
import { City } from "../city/city";
import { Job } from "../job/job";
import { Race } from "../race/race";
import { Specialization } from "../specialization/specialization";
import { User } from "../user/user";
import { Language } from "../language/language";
import { Divinity } from "../divinity/divinity";
import { Secret } from "../secret/secret";

export class Character {

    id?:number;
    user!:User;
    name!:string;
    age!:number;
    height!:number;
    biography!:string;
    strength!:number;
    dexterity!:number;
    constitution!:number;
    intelligence!:number;
    wisdom!:number;
    charisma!:number;
    armor!:number;
    addiction!:number;
    speed!:number;
    perception!:number;
    additionalJob?:Job;
    additionalLanguage?:Language;
    anecdoticSecret!:Secret;
    primordialSecret!:Secret;
    specialization!:Specialization;
    titles!:Title[];
    bornCity!:City;
    liveCity!:City;
    divinity!:Divinity;
    race!:Race

     constructor(
    user:User,
    name:string,
    age:number,
    height:number,
    biography:string,
    strength:number,
    dexterity:number,
    constitution:number,
    intelligence:number,
    wisdom:number,
    charisma:number,
    armor:number,
    addiction:number,
    speed:number,
    perception:number,
    additionalJob:Job,
    additionalLanguage:Language,
    anecdoticSecret:Secret,
    primordialSecret:Secret,
    specialization:Specialization,
    titles:Title[],
    bornCity:City,
    liveCity:City,
    divinity:Divinity,
    race:Race
      ) {
    
      }


    
}





  

