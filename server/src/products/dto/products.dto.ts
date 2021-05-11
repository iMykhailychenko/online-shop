import { IsArray, IsInt, IsString } from 'class-validator';
import { Sizes } from '../entities/sizes.entity';

export class PaginationDto {
    @IsInt()
    page: number;

    @IsInt()
    offset: number;
}

export class ProductDto {
    @IsInt()
    id: number;

    @IsString()
    title: string;

    @IsString()
    description: string;

    @IsString()
    banner: string;

    @IsString()
    price: number;

    @IsArray()
    sizes: { size: string; amount: string }[];

    @IsArray()
    pictures: string[];
}
