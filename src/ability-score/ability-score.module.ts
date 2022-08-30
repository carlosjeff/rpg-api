import { AbilityScoreSchema } from './schemas/ability-score.schema';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AbilityScoreController } from './ability-score.controller';
import { AbilityScoreService } from './ability-score.service';

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'AbilityScore', schema: AbilityScoreSchema}])
    ],
    controllers: [AbilityScoreController],
    providers: [AbilityScoreService],
})
export class AbilityScoreModule { }
