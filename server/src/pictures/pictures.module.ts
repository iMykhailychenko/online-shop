import { Module } from '@nestjs/common';
import { PicturesService } from './pictures.service';
import { PicturesController } from './pictures.controller';

@Module({
    controllers: [PicturesController],
    providers: [PicturesService],
})
export class PicturesModule {}
