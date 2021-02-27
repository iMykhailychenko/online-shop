import { Test, TestingModule } from '@nestjs/testing';
import { PicturesController } from './pictures.controller';

describe('PicturesController', () => {
  let controller: PicturesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PicturesController],
    }).compile();

    controller = module.get<PicturesController>(PicturesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
