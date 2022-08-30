import { MongooseModule } from '@nestjs/mongoose';
import { LanguagesService } from './languages.service';
import { LanguagesController } from './languages.controller';
import { Module } from '@nestjs/common';
import { LanguageSchema } from './schemas/language.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'Language',schema: LanguageSchema}])
    ],
    controllers: [
        LanguagesController,],
    providers: [
        LanguagesService,],
})
export class LanguagesModule { }
