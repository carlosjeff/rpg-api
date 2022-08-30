import { Type } from "class-transformer";
import { ArrayMinSize, IsNotEmpty, IsNotEmptyObject, IsString, MaxLength, MinLength, minLength, ValidateNested } from "class-validator";
import { Skill } from "../schemas/skill.schemas";

export class CreateAbilityScoreDto {
  
    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    readonly name: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(3)
    readonly abbreviation: string;

    @IsNotEmpty()
    @IsString()
    readonly desc: string;

    @IsNotEmpty()
    @ArrayMinSize(1)
    @Type(() => Skill)
    @ValidateNested({each: true})
    @IsNotEmptyObject({nullable: false},{each: true})
    readonly skills: Skill[]
   
}