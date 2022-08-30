import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './common/filter/all-exception.filter';
import { AbilityScoreModule } from './ability-score/ability-score.module';
import { ConditionsModule } from './conditions/conditions.module';
import { LanguagesModule } from './languages/languages.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('MONGODB_URI')
      }),
      inject: [ConfigService]
    }),
    ConditionsModule,
    LanguagesModule,
    AbilityScoreModule,
  ],
  controllers: [
    AppController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
    AppService],
})
export class AppModule { }
