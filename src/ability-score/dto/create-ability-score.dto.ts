import { errorMessage } from './../../common/helpers/validation-error-message.helper';
import { Type } from "class-transformer";
import { ArrayMinSize, IsNotEmpty, IsNotEmptyObject, IsString, MaxLength, MinLength, minLength, ValidateNested } from "class-validator";
import { Skill } from "../schemas/skill.schemas";

export class CreateAbilityScoreDto {
  
    @IsNotEmpty({message: errorMessage.IsNotEmpty})
    @IsString({message: errorMessage.IsString})
    @MinLength(2, {message: errorMessage.MinLength})
    readonly name: string;

    @IsNotEmpty({message: errorMessage.IsNotEmpty})
    @IsString({message: errorMessage.IsString})
    @MinLength(2, {message: errorMessage.MinLength})
    @MaxLength(3, {message: errorMessage.MaxLength})
    readonly abbreviation: string;

    @IsNotEmpty({message: errorMessage.IsNotEmpty})
    @IsString({message: errorMessage.IsString})
    readonly desc: string;

    @IsNotEmpty({message: errorMessage.IsNotEmpty})
    @ArrayMinSize(1, {message: errorMessage.ArrayMinSize})
    @Type(() => Skill)
    @ValidateNested({each: true, message: errorMessage.ValidateNested})
    @IsNotEmptyObject({nullable: false},{each: true, message: errorMessage.IsNotEmptyObject})
    readonly skills: Skill[]
   
}