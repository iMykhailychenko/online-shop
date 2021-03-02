import { AxiosPromise } from 'axios';
import { IPictures } from './interfaces/pictures.interfaces';
export declare class PicturesService {
    private params;
    private data;
    fetchPictures: (index: number) => Promise<AxiosPromise<IPictures>>;
    getPictures: (index: number) => Promise<string>;
}
