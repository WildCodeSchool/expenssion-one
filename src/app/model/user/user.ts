import { Character } from "../character/character";
import { Friend } from "../friend/friend";

export class User {
    id!:string;
    profilPictureUrl!:string;
    biography!:string;
    pseudo!:string;
    friends!:Friend[];
    characters!:Character[];
}
