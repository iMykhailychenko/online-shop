import { Controller, Get, Query } from '@nestjs/common';
import { PicturesService } from './pictures.service';
import { GetPictureDto } from './dto/get-picture.dto';

@Controller('pictures')
export class PicturesController {
    constructor(private readonly picturesService: PicturesService) {}

    @Get()
    findAll(@Query() query: GetPictureDto) {
        // return this.picturesService.findAll();
        return query;
    }
}
