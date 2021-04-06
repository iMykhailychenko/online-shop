import { makeAutoObservable } from 'mobx';

import { ICartProduct } from '../../interface';
import ICart from './cart.types';

class Cart implements ICart {
    public amount = 0;
    public products: ICartProduct[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    push = (product: ICartProduct): void => {
        this.products.push(product);
        this.amount += product.total;
    };

    delete = (id: number) => {
        this.products = this.products.filter(element => element.id !== id);
        this.amount = this.products.reduce((acc, cur) => {
            acc += cur.total;
            return acc;
        }, 0);
    };
}

export default new Cart();
