import { Cart } from './cart';
import { Pictures } from './pictures';
import { Products } from './products';
import { Uploads } from './uploads';

export interface IStore {
    cart: Cart;
    pictures: Pictures;
    products: Products;
    uploads: Uploads;
}

class Store implements IStore {
    constructor(
        public readonly cart: Cart,
        public readonly products: Products,
        public readonly pictures: Pictures,
        public readonly uploads: Uploads,
    ) {}
}

export default new Store(new Cart(), new Products(), new Pictures(), new Uploads());
