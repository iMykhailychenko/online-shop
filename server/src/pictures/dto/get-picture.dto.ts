import IPictures from '../interfaces/pictures.interfaces';

export class GetPictureDto {
    total: number;
    totalHits: number;
    hits: IPictures[];
}
