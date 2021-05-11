import { IsArray, IsInt, IsString } from 'class-validator';
import { ProductDto } from './products.dto';

export class SizesDto {
    @IsInt()
    id: number;

    @IsString()
    size: string;

    @IsString()
    amount: string;

    @IsArray()
    product: ProductDto[];
}
