import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';

import { PicturesModule } from './pictures/pictures.module';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', '..', 'client'),
        }),
        PicturesModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
