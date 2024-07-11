import { Job } from "../job/job";
import { SpecializationContent } from "../specializationContent/specialization-content";
import { Skill } from "./skill/skill";

export class Specialization {
    id?:number;
    name!: string;
    imageUrl!: string;
    jobs!: Job[];
    skills?: Skill[];
    contents!: SpecializationContent[];
    content!:String[];
    
}
