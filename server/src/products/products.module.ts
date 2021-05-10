import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Product } from './entities/products.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pictures } from './entities/pictures.entity';
import { Sizes } from './entities/sizes.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Product, Pictures, Sizes])],
    controllers: [ProductsController],
    providers: [ProductsService],
})
export class ProductsModule {}
