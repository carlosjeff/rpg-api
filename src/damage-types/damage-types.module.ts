import { Module } from '@nestjs/common';
import { DamageTypesController } from './damage-types.controller';
import { DamageTypesService } from './damage-types.service';

@Module({
  controllers: [DamageTypesController],
  providers: [DamageTypesService]
})
export class DamageTypesModule {}
