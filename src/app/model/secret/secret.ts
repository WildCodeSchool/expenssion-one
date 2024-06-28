export class Secret
{
    number!:number;
    description!:String;

    constructor(number:number,
    description:String){
        this.description=description
        this.number=number
    }
}
