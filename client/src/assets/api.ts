import axios, { AxiosResponse } from 'axios';

import { IProduct, IUploadProduct, Pagination, Params } from '../interface';

axios.defaults.baseURL = '/api';

const api = {
    pictures: (position: string | number): Promise<AxiosResponse<string>> => axios.get(`/pictures/${position}`),
    uploads: (form: FormData): Promise<AxiosResponse<string[]>> => axios.post('/uploads', form),
    products: {
        get: (params: Params): Promise<AxiosResponse<Pagination<IProduct[]>>> => axios.get('/products', { params }),
        single: (id: number): Promise<AxiosResponse<IProduct>> => axios.get('/products/' + id),
        create: (body: IUploadProduct): Promise<AxiosResponse<void>> => axios.post('/products', body),
    },
};

export default api;
