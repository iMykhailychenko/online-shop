import { makeAutoObservable } from 'mobx';

import api from '../../assets/api';
import config from '../../assets/config';
import { IPagination, IProduct, Params } from '../../interface';
import IProducts from './products.types';

class Index implements IProducts {
    public loading = true;
    public products: IPagination<IProduct[]> = { total: 0, page: 0, data: [] };
    public element: HTMLDivElement | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    setElement = (dom: HTMLDivElement): void => {
        this.element = dom;
    };

    push = async (): Promise<void> => {
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

    amount = (id: number, amount: number): void => {
        this.products.data = this.products.data.map<IProduct>(item => (item.id === id ? { ...item, amount } : item));
    };
}

export default new Index();
