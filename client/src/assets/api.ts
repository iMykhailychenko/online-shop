import axios, { AxiosResponse } from 'axios';

axios.defaults.baseURL = '/api';

const api = {
    pictures: (position: string | number): Promise<AxiosResponse<string>> => axios.get(`/pictures/${position}`),
};

export default api;
