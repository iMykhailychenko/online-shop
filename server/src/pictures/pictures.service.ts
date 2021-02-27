import { Injectable } from '@nestjs/common';
import { GetPictureDto } from './dto/get-picture.dto';
import axios, { AxiosPromise } from 'axios';

@Injectable()
export class PicturesService {
    private pictures: any[] = [];
    private page = 1;
    private position = 0;
    private maxPosition = 0;

    fetchPictures = async (params: GetPictureDto): Promise<AxiosPromise<void>> => {
        return axios.get('https://pixabay.com/api/', { params });
    };

    getPictures = async (params: GetPictureDto): Promise<string> => {
        const { status, data } = await this.fetchPictures(params);
        console.log({ status, data });
        return '';
    };
}
