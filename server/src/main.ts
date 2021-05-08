import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('api');

    // get config file data
    const configService = app.get(ConfigService);
    const port = configService.get('PORT');

    // run
    await app.listen(port);
    console.log(`Application is running on port: ${port}`);
}

bootstrap().catch(error => console.log(error));
