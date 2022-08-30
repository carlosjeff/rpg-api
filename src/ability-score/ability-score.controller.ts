import { UpdateAbilityScoreDto } from './dto/update-ability-score.dto';
import { CreateAbilityScoreDto } from './dto/create-ability-score.dto';
import { AbilityScoreService } from './ability-score.service';
import { Body, ClassSerializerInterceptor, Controller, Delete, Get, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import MongooseClassSerializerInterceptor  from '../common/interceptor/mongoose.interceptor'
import { AbilityScore } from './schemas/ability-score.schema'

// 
@Controller('ability-score')
@UseInterceptors(MongooseClassSerializerInterceptor(AbilityScore))
export class AbilityScoreController {

   constructor(private readonly abilityScoreService: AbilityScoreService) {}

   @Post()
   public async create(@Body() createDto: CreateAbilityScoreDto) {
       
      return this.abilityScoreService.create(createDto);
   }

   @Get()
   public async getAll() { 
      
      return this.abilityScoreService.getAll(); 
   }

   
   @Get(':id')
   public async getById(@Param('id') id: string) { 
    
      return this.abilityScoreService.getById(id); 
   }

   @Put(':id')
   public async update(@Param('id') id: string, @Body() updateDto: UpdateAbilityScoreDto) { 
      
      return this.abilityScoreService.update(id, updateDto); 
   }

   @Delete(':id')
   public async delete(@Param('id') id: string) { 
      
      return this.abilityScoreService.delete(id); 
   }

 }
