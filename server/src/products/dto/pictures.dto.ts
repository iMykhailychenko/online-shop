import { IsArray, IsInt, IsString } from 'class-validator';
import { ProductDto } from './products.dto';

export class PicturesDto {
    @IsInt()
    id: number;

    @IsString()
    url: string;

    @IsArray()
    product: ProductDto[];
}
