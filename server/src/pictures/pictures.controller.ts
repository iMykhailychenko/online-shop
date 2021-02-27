import { Controller, Get, Param } from '@nestjs/common';

@Controller('pictures')
export class PicturesController {
  @Get()
  getPictures(@Param() params) {
    console.log(params);
    return params;
  }
}
