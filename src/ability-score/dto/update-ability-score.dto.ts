import { errorMessage } from './../../common/helpers/validation-error-message.helper';
import { Type } from "class-transformer";
import { ArrayMinSize, IsNotEmpty, IsNotEmptyObject, IsOptional, IsString, MaxLength, MinLength, ValidateNested } from "class-validator";
import { Skill } from "../schemas/skill.schemas";

export class UpdateAbilityScoreDto {
   
    @IsString({message: errorMessage.IsString})
    @MinLength(2, {message: errorMessage.MinLength})
    @IsOptional()
    readonly name?: string;

    @IsString({message: errorMessage.IsString})
    @MinLength(2, {message: errorMessage.MinLength})
    @MaxLength(3, {message: errorMessage.MaxLength})
    @IsOptional()
    readonly abbreviation?: string;

    @IsString({message: errorMessage.IsString})
    @IsOptional()
    readonly desc?: string;

    @Type(() => Skill)
    @ArrayMinSize(1, {message: errorMessage.ArrayMinSize})
    @ValidateNested({each: true, message: errorMessage.ValidateNested})
    @IsNotEmptyObject({nullable: false},{each: true, message: errorMessage.IsNotEmptyObject})
    @IsOptional()
    readonly skills?: Skill[]
}