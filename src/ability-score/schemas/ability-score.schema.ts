import { Type } from "@nestjs/common";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Exclude, Expose, Transform } from "class-transformer";
import { SchemaTypes, Types } from "mongoose";
import { Skill } from "./skill.schemas";

export type AbilityScoreDocument = AbilityScore & Document;

@Schema()
export class AbilityScore {
   
    @Transform(({ value }) => value.toString())
    _id: string;

    @Prop()
    name: string;

    @Prop()
    @Exclude()
    abbreviation: string;

    @Prop()
    desc: string;

    @Prop([Skill])
    @Transform(({value}) => value.map(s => <Skill>{...s, _id: s._id.toString()}))
    skills: Skill[]
   
}

export const AbilityScoreSchema = SchemaFactory.createForClass(AbilityScore);