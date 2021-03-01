import { Module } from '@nestjs/common';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { PicturesModule } from './pictures/pictures.module';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', '..', '..', 'client'),
            exclude: ['/api*'],
        }),
        PicturesModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
