import { Job } from "../job/job";
import { Skill } from "./skill/skill";
import { SpecializationContent } from "../specializationContent/specialization-content";

export class Specialization {
    id?:number;
    name!: string;
    url!: string;
    jobs!: Job[];
    skills?: Skill[];
    content!: SpecializationContent[];
    
}
