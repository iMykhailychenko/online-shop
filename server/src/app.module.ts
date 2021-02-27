import { Module } from '@nestjs/common';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { PicturesController } from './pictures/pictures.controller';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'client'),
      exclude: ['/api*'],
    }),
  ],
  controllers: [AppController, PicturesController],
  providers: [AppService],
})
export class AppModule {}
