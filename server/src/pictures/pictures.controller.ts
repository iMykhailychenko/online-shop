import { Controller, Get, HttpStatus, Param, ParseIntPipe } from '@nestjs/common';
import { PicturesService } from './pictures.service';

@Controller('pictures')
export class PicturesController {
    constructor(private readonly picturesService: PicturesService) {}

    @Get('/:index')
    async findAll(@Param('index', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) index: number) {
        return await this.picturesService.getPictures(index);
    }
}
