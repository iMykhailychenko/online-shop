import { Injectable } from '@nestjs/common';
import { Product } from './products.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaginationDto } from './dto/products.dto';
import { Pagination } from '../interfaces';

@Injectable()
export class ProductsService {
    constructor(@InjectRepository(Product) private productsRepository: Repository<Product>) {}

    async findAll({ page, offset }: PaginationDto): Promise<Pagination<Product[]>> {
        const [result, total] = await this.productsRepository.findAndCount({
            relations: ['pictures'],
            take: offset,
            skip: offset * page,
        });

        return {
            total: Math.ceil(total / offset) - 1,
            page: +page,
            data: result,
        };
    }
}
