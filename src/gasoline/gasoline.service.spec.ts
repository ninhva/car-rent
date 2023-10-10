import { Test, TestingModule } from '@nestjs/testing';
import { GasolineService } from './gasoline.service';

describe('GasolineService', () => {
  let service: GasolineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GasolineService],
    }).compile();

    service = module.get<GasolineService>(GasolineService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
