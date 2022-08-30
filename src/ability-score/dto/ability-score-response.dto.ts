import { Exclude, Expose } from "class-transformer";
import { Skill } from "../schemas/skill.schemas";


export class AbilitySscoreResponseDto {

    @Expose()
    name: string;

    @Exclude()
    abbreviation: string;

    @Expose()
    desc: string[];

    @Expose()
    skills: Skill[]

}