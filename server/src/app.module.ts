import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';
import { Connection } from 'typeorm';
import { join } from 'path';

import { PicturesModule } from './pictures/pictures.module';
import { ProductsModule } from './products/products.module';
import config from '../assets/config';
import { Product } from './products/entities/products.entity';
import { Pictures } from './products/entities/pictures.entity';
import { Sizes } from './products/entities/sizes.entity';
import { UploadsController } from './uploads/uploads.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', '..', 'client'),
            exclude: ['/api*'],
        }),
        TypeOrmModule.forRoot({
            type: 'postgres',
            entities: [Product, Pictures, Sizes],
            ...config().db,
        }),
        PicturesModule,
        ProductsModule,
        AuthModule,
        UsersModule,
    ],
    controllers: [UploadsController],
    providers: [],
})
export class AppModule {
    constructor(private connection: Connection) {}
}
