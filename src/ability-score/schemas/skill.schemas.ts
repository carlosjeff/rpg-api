import { Prop, Schema } from "@nestjs/mongoose";
import { Expose } from "class-transformer";

@Schema()
export class Skill {
   
    @Prop()
    @Expose()
    name: string;

    @Prop([String])
    @Expose()
    desc: string[];
}