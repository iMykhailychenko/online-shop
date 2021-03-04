import { Injectable } from '@nestjs/common';
import axios, { AxiosPromise } from 'axios';
import config from '../../assets/config';
import { IPictures } from './interfaces/pictures.interfaces';

@Injectable()
export class PicturesService {
    private params = config().pixabay;
    private data: IPictures = { total: 0, totalHits: 0, hits: [] };

    fetchPictures = (index: number): Promise<AxiosPromise<IPictures>> => {
        const page = Math.floor(index / this.params.per_page) + 1;
        const params = { ...this.params, page };
        return axios.get('https://pixabay.com/api/', { params });
    };

    getPictures = async (index: number): Promise<string> => {
        if (index >= this.data?.hits?.length && this.data?.hits?.length) {
            const { data } = await this.fetchPictures(index);
            this.data.hits = [...this.data.hits, ...data.hits];
        }

        if (!this.data?.hits?.length) {
            const { data } = await this.fetchPictures(index);
            this.data = data;
        }

        return this.data.hits[index].largeImageURL;
    };
}
