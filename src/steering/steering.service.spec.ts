import { Test, TestingModule } from '@nestjs/testing';
import { SteeringService } from './steering.service';

describe('SteeringService', () => {
  let service: SteeringService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SteeringService],
    }).compile();

    service = module.get<SteeringService>(SteeringService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
