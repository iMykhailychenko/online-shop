import { Params } from '@fortawesome/fontawesome-svg-core';
import axios, { AxiosResponse } from 'axios';

import { IProduct } from '../interface';

axios.defaults.baseURL = '/api';

const api = {
    pictures: (position: string | number): Promise<AxiosResponse<string>> => axios.get(`/pictures/${position}`),
    products: {
        get: (params: Params): Promise<AxiosResponse<IProduct[]>> => axios.get('/products', { params }),
    },
};

export default api;
