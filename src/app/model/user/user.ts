import { Character } from "../character/character";
import { Friend } from "../friend/friend";

export class User {

    id?:string;
    pseudo!:string;
    lastname!:String;
    firstname!:string;
    password!:string;
    email!:string;
    dateOfBirth!:string;

    isNewletters?:boolean;
    isPublic?:boolean;
   
    biography?:string;
    profilPictureUrl?:string;
    
    friends?:Friend[];
    characters?:Character[];

    constructor(
        pseudo: string,
        lastname: string,
        firstname: string,
        password: string,
        email: string,
        dateOfBirth: string,
      ) {
        this.pseudo = pseudo;
        this.lastname = lastname;
        this.firstname = firstname;
        this.password = password;
        this.email = email;
        this.dateOfBirth = dateOfBirth;
      }
}
