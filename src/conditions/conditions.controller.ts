import { UpdateConditionDto } from './dto/update-condition.dto';
import { ConditionsService } from './conditions.service';


import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateConditionDto } from './dto/create-condition.dto';

@Controller('conditions')
export class ConditionsController { 

    constructor(private readonly conditionsService: ConditionsService) {}

    @Post()
    public async create(@Body() createDto: CreateConditionDto) {
       
       return this.conditionsService.create(createDto);
    }

    @Get()
    public async getAll() { 
        
        return this.conditionsService.getAll(); 
    }

    @Get(':id')
    public async getById(@Param('id') id: string) { 
        
        return this.conditionsService.getById(id); 
    }

    @Put(':id')
    public async update(@Param('id') id: string, @Body() updateDto: UpdateConditionDto) { 
        
        return this.conditionsService.update(id,updateDto); 
    }
    
    @Delete(':id')
    public async delete(@Param('id') id: string) { 
        
        return this.conditionsService.delete(id); 
    }

}
