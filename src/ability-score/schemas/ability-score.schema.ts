import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Exclude, Transform } from "class-transformer";
import { TransformObjectIdToString } from "src/common/functions/transform-objectid-to-strint";
import { Skill } from "./skill.schemas";

export type AbilityScoreDocument = AbilityScore & Document;

@Schema()
export class AbilityScore {
   
    @TransformObjectIdToString()
    _id: string;

    @Prop()
    name: string;

    @Prop()
    @Exclude()
    abbreviation: string;

    @Prop()
    desc: string;

    @Prop([Skill])
    @TransformObjectIdToString()
    skills: Skill[]
   
}

export const AbilityScoreSchema = SchemaFactory.createForClass(AbilityScore);