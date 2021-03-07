import { IsInt } from 'class-validator';

export class PaginationDto {
    @IsInt()
    page: number;

    @IsInt()
    offset: number;
}
