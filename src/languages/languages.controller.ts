import { UpdateLanguageDto } from './dto/update-language.dto';
import { Language } from './schemas/language.schema';
import { CreateLanguageDto } from './dto/create-language.dto';
import { LanguagesService } from './languages.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('languages')
export class LanguagesController { 

    constructor(private readonly languagesService: LanguagesService) {}

    @Post()
    public async create(@Body() createDto: CreateLanguageDto) { 
        
        return this.languagesService.create(createDto); 
    }

    @Post('many')
    public async createMany(@Body() createDtoMany: CreateLanguageDto[]) {
       
       return this.languagesService.create(createDtoMany);
    }

    @Put(':id')
    public async update(@Param('id') id: string, @Body() updateDto: UpdateLanguageDto) {
       
       return this.languagesService.update(id, updateDto);
    }

    @Get()
    public async getAll(): Promise<Language[]>{ 
        
        return this.languagesService.getAll(); 
    }

    @Get(':id')
    public async getById(@Param('id') id: string): Promise<Language> { 
        
        return this.languagesService.getById(id); 
    }

    @Delete(':id')
    public async delete(@Param('id') id: string) {
       
       return this.languagesService.delete(id);
    }

}
