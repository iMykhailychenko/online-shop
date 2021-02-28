import { AxiosPromise } from 'axios';
import { GetPictureDto } from './dto/get-picture.dto';
export declare class PicturesService {
    private params;
    private data;
    fetchPictures: (index: number) => Promise<AxiosPromise<GetPictureDto>>;
    getPictures: (index: number) => Promise<string>;
}
