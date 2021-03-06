import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';
import { Connection } from 'typeorm';
import { join } from 'path';

import { PicturesModule } from './pictures/pictures.module';
import { ProductsModule } from './products/products.module';
import config from '../assets/config';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', '..', 'client'),
        }),
        TypeOrmModule.forRoot({
            type: 'postgres',
            entities: [],
            ...config().db,
        }),
        PicturesModule,
        ProductsModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
    constructor(private connection: Connection) {}
}
