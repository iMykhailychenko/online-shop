import axios, { AxiosResponse } from 'axios';

import { IProduct, Pagination, Params } from '../interface';

axios.defaults.baseURL = '/api';

const api = {
    pictures: (position: string | number): Promise<AxiosResponse<string>> => axios.get(`/pictures/${position}`),
    products: {
        get: (params: Params): Promise<AxiosResponse<Pagination<IProduct[]>>> => axios.get('/products', { params }),
        single: (id: number): Promise<AxiosResponse<IProduct>> => axios.get('/products/' + id),
    },
};

export default api;
