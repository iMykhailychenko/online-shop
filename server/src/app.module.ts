import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';

import { PicturesModule } from './pictures/pictures.module';
import { FrontendMiddleware } from './app.middleware';

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
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer): void {
        consumer.apply(FrontendMiddleware).forRoutes({
            path: '/**',
            method: RequestMethod.GET,
        });
    }
}
