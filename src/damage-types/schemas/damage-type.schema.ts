import { Prop, Schema } from "@nestjs/mongoose";
import { Transform } from "class-transformer";

@Schema()
export class DamageTypes {
   
    @Transform(({obj}) => typeof obj._id == 'string' ? obj._id : obj._id.toString())
    _id: string;

    @Prop()
    name: string;

    @Prop()
    desc: string
       
}