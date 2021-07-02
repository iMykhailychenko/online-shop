import { IsArray, IsInt, IsString } from 'class-validator';
import { ProductDto } from '../../products/dto/products.dto';

export class PaginationDto {
    @IsInt()
    page: number;

    @IsInt()
    offset: number;
}

export class UsersDto {
    @IsInt()
    id: number;

    @IsString()
    name: string;

    @IsString()
    surname: string;

    @IsString()
    email: string;

    @IsArray()
    products: ProductDto[];
}
