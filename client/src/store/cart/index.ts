import { makeAutoObservable } from 'mobx';

import ICart from './cart.types';

class Cart implements ICart {
    public products = 0;

    constructor() {
        makeAutoObservable(this);
    }
}

export default new Cart();
