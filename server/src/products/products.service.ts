import { Injectable } from '@nestjs/common';
import { Product } from './entities/products.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaginationDto, ProductDto } from './dto/products.dto';
import { Pagination } from '../interfaces';
import { Pictures } from './entities/pictures.entity';
import { Sizes } from './entities/sizes.entity';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product) private productsRepository: Repository<Product>,
        @InjectRepository(Pictures) private pictureRepository: Repository<Pictures>,
        @InjectRepository(Sizes) private sizesRepository: Repository<Sizes>,
    ) {}

    async findAll({ page, offset }: PaginationDto): Promise<Pagination<Product[]>> {
        const [result, total] = await this.productsRepository.findAndCount({
            relations: ['pictures', 'sizes'],
            take: offset,
            skip: offset * (page - 1),
        });

        return {
            total: Math.ceil(total / offset) - 1,
            page: +page,
            data: result,
        };
    }

    async findById(id: number): Promise<Product> {
        return await this.productsRepository.findOne(id, { relations: ['pictures', 'sizes'] });
    }

    async createProduct(data: ProductDto): Promise<Product> {
        const product = new Product();
        product.title = data.title;
        product.description = data.description;
        product.price = data.price;
        product.banner = data.pictures[0];

        const pictures: Pictures[] = [];
        for await (const url of data.pictures) {
            const picture = new Pictures();
            picture.url = url;
            pictures.push(picture);
            await this.pictureRepository.save(picture);
        }
        product.pictures = pictures;

        const sizes: Sizes[] = [];
        for await (const item of data.sizes) {
            const size = new Sizes();
            size.size = item.size;
            size.amount = item.amount;
            sizes.push(size);
            await this.sizesRepository.save(size);
        }
        product.sizes = sizes;

        return await this.productsRepository.save(product);
    }
}
