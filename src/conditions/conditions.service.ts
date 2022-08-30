import { CreateConditionDto } from './dto/create-condition.dto';
import { ConditionDocument } from './schemas/condition.schema';

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateConditionDto } from './dto/update-condition.dto';

@Injectable()
export class ConditionsService {

    constructor(@InjectModel('Condition') private readonly conditionModel: Model<ConditionDocument>) {
        
    }

    public async create(createDto: CreateConditionDto) {
       
       return await this.conditionModel.create(createDto);
    }

    public async getAll() { 
        
        return await this.conditionModel.find().exec();
    }

    public async getById(id: string) { 
        
        return await this.conditionModel.findOne({_id: id}).exec(); 
    }

    public async update(id: string,updateDto: UpdateConditionDto) { 
        
        await this.conditionModel.updateOne({_id: id}, updateDto)

        return this.getById(id); 
    }

    public async delete(id: string) { 
        
        return await this.conditionModel.findByIdAndRemove({_id: id}).exec(); 
    }

 }
