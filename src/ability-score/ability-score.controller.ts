import { UpdateAbilityScoreDto } from './dto/update-ability-score.dto';
import { CreateAbilityScoreDto } from './dto/create-ability-score.dto';
import { AbilityScoreService } from './ability-score.service';
import { Body, ClassSerializerInterceptor, Controller, Delete, Get, Param, Post, Put, Res, UseInterceptors, HttpStatus, HostParam, Req, HttpException, NotFoundException, UseFilters } from '@nestjs/common';
import MongooseClassSerializerInterceptor  from '../common/interceptor/mongoose.interceptor'
import { AbilityScore } from './schemas/ability-score.schema'
import { Response, Request  } from 'express';
import { locationURL } from 'src/common/helpers/location-url.helper';
// 
@Controller('ability-score')
@UseInterceptors(MongooseClassSerializerInterceptor(AbilityScore))
export class AbilityScoreController {

   constructor(private readonly abilityScoreService: AbilityScoreService) {}

   @Post()
   public async create(@Body() createDto: CreateAbilityScoreDto, @Res({ passthrough: true }) res: Response) {

      const abilityScore = this.abilityScoreService.create(createDto);
      res.location(locationURL(res,(await abilityScore)._id));

      return abilityScore
   }

   @Get()
   public async getAll() { 
      
      const abilityScore = this.abilityScoreService.getAll()

      if((await abilityScore).length == 0){
         throw new NotFoundException({
            statusCode: HttpStatus.NOT_FOUND,
            message: 'Não foi encontardo nenhum Ability Score!'
         })
      }

      return abilityScore; 
   }

   @Get(':id')
   public async getById(@Param('id') id: string) { 
         
      return this.abilityScoreService.getById(id);;    
   }

   @Put(':id')
   public async update(@Param('id') id: string, @Body() updateDto: UpdateAbilityScoreDto, @Res({ passthrough: true }) res: Response) { 
      
      const abilityScore = this.abilityScoreService.update(id, updateDto);
      res.location(locationURL(res, id));

      return  abilityScore
   }

   @Delete(':id')
   public async delete(@Param('id') id: string) { 
      
      return this.abilityScoreService.delete(id); 
   }

 }
