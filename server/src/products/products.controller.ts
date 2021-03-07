import { Controller, Get, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { PaginationDto } from './dto/products.dto';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Get()
    async findAll(@Query() query: PaginationDto): Promise<any[]> {
        console.log(query);
        return this.productsService.findAll();
    }
}
