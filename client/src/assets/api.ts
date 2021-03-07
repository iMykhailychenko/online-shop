import { Params } from '@fortawesome/fontawesome-svg-core';
import axios, { AxiosResponse } from 'axios';

import { Product } from '../interface';

axios.defaults.baseURL = '/api';

const api = {
    pictures: (position: string | number): Promise<AxiosResponse<string>> => axios.get(`/pictures/${position}`),
    products: {
        get: (params: Params): Promise<AxiosResponse<Product[]>> => axios.get('/products', { params }),
    },
};

export default api;
