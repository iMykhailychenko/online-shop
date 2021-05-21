import { makeAutoObservable } from 'mobx';

import api from '../../assets/api';
import config from '../../assets/config';
import notifications from '../../components/common/Notifications';
import { IProduct, ISingleProduct, Pagination, Params } from '../../interface';
import IProducts from './products.types';

export default class Products implements IProducts {
    public loading = true;
    public products: Pagination<IProduct[]> = { total: 0, page: 0, data: [] };
    public single: ISingleProduct | null = null;
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
            notifications.error();
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
            notifications.error();
        }

        this.loading = false;
    };

    findById = async (id: number): Promise<void> => {
        try {
            const { status, data } = await api.products.single(id);
            if (status < 200 || status >= 300) throw new Error();
            this.single = data;
        } catch (error) {
            notifications.error();
        }
    };

    amount = (id: number, amount: number): void => {
        this.products.data = this.products.data.map<IProduct>(item => (item.id === id ? { ...item, amount } : item));
    };

    create = async (product: Omit<IProduct, 'id'>): Promise<void | null> => {
        try {
            const { status } = await api.products.create(product);
            if (status < 200 || status >= 300) throw new Error();
        } catch (error) {
            notifications.error();
            return null;
        }
    };
}
