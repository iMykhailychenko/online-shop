import { PicturesService } from './pictures.service';
export declare class PicturesController {
    private readonly picturesService;
    constructor(picturesService: PicturesService);
    findAll(index: string): Promise<string>;
}
