import { makeAutoObservable } from 'mobx';

import api from '../assets/api';

class Pictures {
    page = 1;
    loading = false;
    data: any[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    getPicture = async (): Promise<void> => {
        this.loading = true;
        const { status, data } = await api.pictures(this.page);
        console.log({ status, data });
        this.data = data;
    };
}

export default new Pictures();
