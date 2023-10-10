import { Test, TestingModule } from '@nestjs/testing';
import { SteeringController } from './steering.controller';
import { SteeringService } from './steering.service';

describe('SteeringController', () => {
  let controller: SteeringController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SteeringController],
      providers: [SteeringService],
    }).compile();

    controller = module.get<SteeringController>(SteeringController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
