import axios, { AxiosResponse } from 'axios';

import { Product } from '../interface';

axios.defaults.baseURL = '/api';

const api = {
    pictures: (position: string | number): Promise<AxiosResponse<string>> => axios.get(`/pictures/${position}`),
    products: {
        get: (): Promise<AxiosResponse<Product[]>> => axios.get('/products'),
    },
};

export default api;
