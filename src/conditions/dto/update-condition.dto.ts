import { TableCondition } from "../schemas/table-condition";


export class UpdateConditionDto {
   
    name?: string;

    desc?: string[];

    tableConditions?: TableCondition[]
   
}