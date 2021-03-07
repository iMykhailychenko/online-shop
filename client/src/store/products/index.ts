import { Params } from '@fortawesome/fontawesome-svg-core';
import { makeAutoObservable } from 'mobx';

import api from '../../assets/api';
import config from '../../assets/config';
import { IPagination, Product } from '../../interface';
import IProducts from './products.types';

class Index implements IProducts {
    public loading = true;
    public products: IPagination<Product[]> = { total: 0, page: 0, data: [] };
    public element: HTMLDivElement | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    setElement = (dom: HTMLDivElement) => {
        this.element = dom;
    };

    setProducts = async () => {
        this.loading = true;
        try {
            const { status, data } = await api.products.get({ page: 1, offset: config.products.offset } as Params);
            if (status < 200 || status >= 300) throw new Error();
            this.products.total = 5;
            this.products.page = 1;
            this.products.data = data;
        } catch (error) {
            console.dir(error);
        }

        this.loading = false;
    };
}

export default new Index();
