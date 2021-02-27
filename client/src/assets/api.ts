import axios, { AxiosResponse } from 'axios';

import config from './config';

axios.defaults.baseURL = '/api';

const api = {
    pictures: (page: string | number): Promise<AxiosResponse<any[]>> =>
        axios.get('/pictures', {
            params: {
                per_page: 30,
                key: config.pixabay,
                category: 'nature',
                editors_choice: 'true',
                orientation: 'horizontal',
                image_type: 'photo',
                page,
            },
        }),
};

export default api;
