import { UpdateLanguageDto } from './dto/update-language.dto';
import { CreateLanguageDto } from './dto/create-language.dto';
import { Language, LanguageDocument } from './schemas/language.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class LanguagesService {

    constructor(@InjectModel('Language') private readonly languageModel: Model<LanguageDocument>) {}

    public async create(createDto: CreateLanguageDto | CreateLanguageDto[]): Promise<Language> { 
        
        return await this.languageModel.create(createDto); 
    }
 
    public async update(id: string ,updateDto: UpdateLanguageDto) {
       
        await this.languageModel.updateOne({_id: id},updateDto)

       return this.getById(id);
    }

    public async getAll(): Promise<Language[]>{ 
        
        return this.languageModel.find().exec(); 
    }

    public async getById(id: string): Promise<Language> { 
        
        return this.languageModel.findOne({ _id: id }).exec(); 
    }

    public async delete(id: string){
       
       return await this.languageModel.findByIdAndRemove({_id: id}).exec();
    }

 }
