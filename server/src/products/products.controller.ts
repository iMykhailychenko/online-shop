import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { PaginationDto } from './dto/products.dto';
import { Pagination } from '../interfaces';
import { Product } from './products.entity';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Get()
    async findAll(@Query() query: PaginationDto): Promise<Pagination<Product[]>> {
        return await this.productsService.findAll(query);
    }

    @Get(':id')
    async findById(@Param() params) {
        return await this.productsService.findById(params.id);
    }

    @Post()
    async createProduct(@Body() product: Product) {
        return await this.productsService.createProduct(product);
    }
}
