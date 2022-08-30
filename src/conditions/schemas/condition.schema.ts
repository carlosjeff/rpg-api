import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { TableCondition } from "./table-condition";

export type ConditionDocument = Condition & Document;

@Schema()
export class Condition {
   
    @Prop()
    name: string;

    @Prop([String])
    desc: string[];

    @Prop([TableCondition])
    tableConditions?: TableCondition[]
   
}

export const ConditionSchema = SchemaFactory.createForClass(Condition);


