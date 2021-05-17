import { makeAutoObservable } from 'mobx';

import { IProduct } from '../../interface';
import ICart from './cart.types';

export default class Cart implements ICart {
    public drawer = false;
    public amount = 0;
    public products: IProduct[] = [];
    public productsId: number[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    push = (product: IProduct): void => {
        const inCart = this.products.find(
            item => item.id === product.id && product.selectedSize?.size === item.selectedSize?.size,
        );

        if (inCart) {
            if (!product.amount) {
                this.products = this.products.filter(
                    item => item.id !== product.id && product.selectedSize?.size !== item.selectedSize?.size,
                );
                this.countAmount();
                return;
            }
            this.products = this.products.map(item =>
                item.id === product.id && product.selectedSize?.size === item.selectedSize?.size ? product : item,
            );
            this.countAmount();
            return;
        }

        if (!product.amount) {
            this.countAmount();
            return;
        }

        this.products.push(product);
        this.countAmount();
    };

    delete = (id: number, size?: string): void => {
        this.products = this.products.filter(item => !(item.id === id && item.selectedSize?.size === size));
        this.countAmount();
    };

    toggleCart = (): void => {
        this.drawer = !this.drawer;
    };

    countAmount = (): void => {
        this.amount = this.products.reduce((acc, item) => {
            acc += item.amount || 0;
            return acc;
        }, 0);
    };
}
