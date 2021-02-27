import { makeAutoObservable } from 'mobx';

interface ICart {
    products: number;
}

class Cart implements ICart {
    public products = 0;

    constructor() {
        makeAutoObservable(this);
    }
}

export default new Cart();
