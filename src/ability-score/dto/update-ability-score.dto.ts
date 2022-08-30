import { Type } from "class-transformer";
import { ArrayMinSize, IsNotEmpty, IsNotEmptyObject, IsString, MaxLength, MinLength, minLength, ValidateNested } from "class-validator";
import { Skill } from "../schemas/skill.schemas";

export class UpdateAbilityScoreDto {
   
    @IsString()
    @MinLength(2)
    readonly name?: string;

    @IsString()
    @MinLength(2)
    @MaxLength(3)
    readonly abbreviation?: string;

    @IsString()
    readonly desc?: string;

    @Type(() => Skill)
    @ArrayMinSize(1)
    @ValidateNested({each: true})
    @IsNotEmptyObject({nullable: false},{each: true})
    readonly skills?: Skill[]
}