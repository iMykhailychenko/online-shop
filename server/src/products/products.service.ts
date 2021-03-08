import { Injectable } from '@nestjs/common';
import { Product } from './products.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private productsRepository: Repository<Product>,
    ) {}

    findAll(): Promise<Product[]> {
        return this.productsRepository.find({ relations: ['pictures'] });
    }
}
