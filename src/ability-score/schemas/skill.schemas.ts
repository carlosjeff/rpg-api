import { Prop, Schema } from "@nestjs/mongoose";
import { Expose, Transform } from "class-transformer";

@Schema()
export class Skill {

    
    _id: string;
   
    @Prop()
    name: string;

    @Prop([String])
    desc: string[];
}