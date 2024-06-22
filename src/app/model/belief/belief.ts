export class Divinity {
    name!:string;
    title!:string;
    gender!:string;
    effet!:string;
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
}
export class Belief {
    name!:string;
    description!:string[];
    divinities!:Divinity[];
}
