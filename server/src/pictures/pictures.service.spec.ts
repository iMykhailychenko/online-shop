import { Test, TestingModule } from '@nestjs/testing';
import { PicturesService } from './pictures.service';

describe('PicturesService', () => {
  let service: PicturesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PicturesService],
    }).compile();

    service = module.get<PicturesService>(PicturesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
