import { AbilityScore, AbilityScoreDocument } from './schemas/ability-score.schema';
import { CreateAbilityScoreDto } from './dto/create-ability-score.dto';

import { BadRequestException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { UpdateAbilityScoreDto } from './dto/update-ability-score.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


@Injectable()
export class AbilityScoreService { 

    constructor(@InjectModel('AbilityScore') private readonly abilityScoreModel: Model<AbilityScoreDocument>) { }
   
   public async create(createDto: CreateAbilityScoreDto): Promise<AbilityScore> {
           
      return await this.abilityScoreModel.create(createDto);
   }

   public async getAll(): Promise<AbilityScore[]> { 
      
      return await this.abilityScoreModel.find().exec(); 
   }

   public async getById(id: string): Promise<AbilityScore> { 

      return await this.abilityScoreModel.findOne({_id: id}).exec();
   }

   public async update(id: string, updateDto: UpdateAbilityScoreDto): Promise<AbilityScore>{ 
      
      return await this.abilityScoreModel.findByIdAndUpdate({_id: id},updateDto,{returnDocument: 'after'}); 
   }

   public async delete(id: string): Promise<AbilityScore> { 
      
      return await this.abilityScoreModel.findByIdAndDelete(id); 
   }


}
