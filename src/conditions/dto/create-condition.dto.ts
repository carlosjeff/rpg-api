import { TableCondition } from "../schemas/table-condition";


export class CreateConditionDto {
  
    name: string;

    desc: string[];

    tableConditions?: TableCondition[]
   
}