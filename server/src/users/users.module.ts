import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { UsersController } from './users.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Users])],
    providers: [UsersService],
    controllers: [UsersController],
    exports: [UsersService],
})
export class UsersModule {}
