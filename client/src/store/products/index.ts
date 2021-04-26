import { makeAutoObservable } from 'mobx';

import api from '../../assets/api';
import config from '../../assets/config';
import { IProduct, Pagination, Params } from '../../interface';
import IProducts from './products.types';

class Index implements IProducts {
    public loading = true;
    public products: Pagination<IProduct[]> = { total: 0, page: 0, data: [] };
    public element: HTMLDivElement | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    setElement = (dom: HTMLDivElement): void => {
        this.element = dom;
    };

    push = async (page: number): Promise<void> => {
        this.loading = true;
        try {
            const { status, data } = await api.products.get({ page, offset: config.products.offset } as Params);
            if (status < 200 || status >= 300) throw new Error();
            this.products = data;
        } catch (error) {
            console.dir(error);
        }

        this.loading = false;
    };

    more = async (page: number): Promise<void> => {
        try {
            const { status, data } = await api.products.get({ page, offset: config.products.offset } as Params);
            if (status < 200 || status >= 300) throw new Error();
            this.products.data = [...this.products.data, ...data.data];
            this.products.total = data.total;
            this.products.page = data.page;
        } catch (error) {
            console.dir(error);
        }

        this.loading = false;
    };

    amount = (id: number, amount: number): void => {
        this.products.data = this.products.data.map<IProduct>(item => (item.id === id ? { ...item, amount } : item));
    };
}

export default new Index();
