import { Controller, Get, Param } from '@nestjs/common';
import { PicturesService } from './pictures.service';

@Controller('pictures')
export class PicturesController {
    constructor(private readonly picturesService: PicturesService) {}

    @Get('/:index')
    async findAll(@Param('index') index: string) {
        return await this.picturesService.getPictures(+index);
    }
}
