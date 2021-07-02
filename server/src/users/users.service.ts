import { Injectable } from '@nestjs/common';
import { Users } from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaginationDto } from './dto/users.dto';
import { Pagination } from '../interfaces';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(Users) private usersRepository: Repository<Users>) {}

    async findAll({ page, offset }: PaginationDto): Promise<Pagination<Users[]>> {
        const [result, total] = await this.usersRepository.findAndCount({
            relations: ['products'],
            take: offset,
            skip: offset * (page - 1),
        });

        return {
            total: Math.ceil(total / offset) - 1,
            page: +page,
            data: result,
        };
    }

    async findById(id: number): Promise<Users> {
        return this.usersRepository.findOne(id, { relations: ['products'] });
    }

    async findByEmail(email: string): Promise<Users> {
        return this.usersRepository.findOne(email, { relations: ['products'] });
    }
}
