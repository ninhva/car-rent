import { Test, TestingModule } from '@nestjs/testing';
import { GasolineController } from './gasoline.controller';
import { GasolineService } from './gasoline.service';

describe('GasolineController', () => {
  let controller: GasolineController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GasolineController],
      providers: [GasolineService],
    }).compile();

    controller = module.get<GasolineController>(GasolineController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
