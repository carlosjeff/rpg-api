import { ParseObjectIdPipe } from './../common/pipe/parse-object-id.pipe';
import { UpdateAbilityScoreDto } from './dto/update-ability-score.dto';
import { CreateAbilityScoreDto } from './dto/create-ability-score.dto';
import { AbilityScoreService } from './ability-score.service';
import { Body, ClassSerializerInterceptor, Controller, Delete, Get, Param, Post, Put, Res, UseInterceptors, HttpStatus, HostParam, Req, HttpException, NotFoundException, UseFilters, InternalServerErrorException, BadRequestException } from '@nestjs/common';
import MongooseClassSerializerInterceptor  from '../common/interceptor/mongoose.interceptor'
import { AbilityScore } from './schemas/ability-score.schema'
import { Response, Request  } from 'express';
import { locationURL } from 'src/common/helpers/location-url.helper';
import { Types } from 'mongoose';
// 
@Controller('ability-score')
@UseInterceptors(MongooseClassSerializerInterceptor(AbilityScore))
export class AbilityScoreController {

   constructor(private readonly abilityScoreService: AbilityScoreService) {}

   @Post()
   public async create(
         @Body() createDto: CreateAbilityScoreDto, 
         @Res({ passthrough: true }) res: Response): Promise<AbilityScore> {

      try {
         
         const abilityScore = await this.abilityScoreService.create(createDto);
   
         res.status(HttpStatus.CREATED)
            .location(locationURL(res,abilityScore._id));
         return abilityScore
      } catch (error) {
         throw new BadRequestException({
            statusCode: 404,
            message: 'Não foi possivel criar Ability Score!'
         })
      }
   }

   @Get()
   public async getAll(): Promise<AbilityScore[]> { 
      return this.abilityScoreService.getAll();
   }

   @Get(':id')
   public async getById(
         @Res({ passthrough: true }) res: Response ,
         @Param('id', ParseObjectIdPipe) id: string): Promise<AbilityScore> { 

      const abilityScore = await this.abilityScoreService.getById(id);
      
      if(!abilityScore){
         throw new NotFoundException({
            statusCode: 404,
            message: 'Não foi encontardo nenhum Ability Score!'
          })
      }

      res.status(HttpStatus.OK)
      return abilityScore;
   }

   @Put(':id')
   public async update(
         @Param('id', ParseObjectIdPipe) id: string, 
         @Body() updateDto: UpdateAbilityScoreDto, 
         @Res({ passthrough: true }) res: Response): Promise<AbilityScore>{ 
      
      
      if(!(await this.abilityScoreService.getById(id))){

         throw new NotFoundException({
            statusCode: 404,
            message: 'Não foi encontardo nenhum Ability Score!'
         })
      }
         
      const abilityScore = await this.abilityScoreService.update(id, updateDto);

      res.status(HttpStatus.OK)
         .location(locationURL(res, id));
      return abilityScore
   }

   @Delete(':id')
   public async delete(
         @Res({ passthrough: true }) res: Response, 
         @Param('id', ParseObjectIdPipe) id: string): Promise<string> { 

      if(!(await this.abilityScoreService.getById(id))){
         throw new NotFoundException({
            statusCode: 404,
            message: 'Não foi encontardo nenhum Ability Score!'
          })
      }

      const abilityScoreDelete = await this.abilityScoreService.delete(id)
         
      if(!abilityScoreDelete){
         throw new InternalServerErrorException({
            statusCode: 404,
            message: 'Não foi possivel apagar o registro!'
         })
      }

      res.status(HttpStatus.OK)
      return 'Ability Score foi removida com sucesso!'; 
   }

 }
