import { Controller, Get, Param, Query } from '@nestjs/common';
import { UsersService } from './users.service';

import { Users } from './users.entity';

import { Pagination } from '../interfaces';
import { PaginationDto } from './dto/users.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    async findAll(@Query() query: PaginationDto): Promise<Pagination<Users[]>> {
        return await this.usersService.findAll(query);
    }

    @Get(':id')
    async findById(@Param() params): Promise<Users> {
        return await this.usersService.findById(params.id);
    }
}
