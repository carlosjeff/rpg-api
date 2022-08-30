import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose'

export type LanguageDocument = Language & Document;

@Schema()
export class Language {
   
    @Prop()
    name: string;

    @Prop()
    type: string;

    @Prop()
    script: string;

    @Prop([String])
    typicalSpeakers: string[]
   
}

export const LanguageSchema = SchemaFactory.createForClass(Language);