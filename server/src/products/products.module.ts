import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Product } from './products.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pictures } from './pictures.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Product, Pictures])],
    controllers: [ProductsController],
    providers: [ProductsService],
})
export class ProductsModule {}
