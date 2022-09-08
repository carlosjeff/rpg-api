import { Test, TestingModule } from '@nestjs/testing';
import { DamageTypesController } from './damage-types.controller';

describe('DamageTypesController', () => {
  let controller: DamageTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DamageTypesController],
    }).compile();

    controller = module.get<DamageTypesController>(DamageTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
