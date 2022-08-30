import { ConditionSchema } from './schemas/condition.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ConditionsService } from './conditions.service';
import { ConditionsController } from './conditions.controller';
import { Module } from '@nestjs/common';

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'Condition', schema: ConditionSchema}])
    ],
    controllers: [
        ConditionsController,],
    providers: [
        ConditionsService,],
})
export class ConditionsModule { }
