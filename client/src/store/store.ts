import Cart from './cart';
import Pictures from './pictures';
import Products from './products';
import IStore from './store.types';
import Uploads from './uploads';

class Store implements IStore {
    constructor(
        public readonly cart: Cart,
        public readonly products: Products,
        public readonly pictures: Pictures,
        public readonly uploads: Uploads,
    ) {}
}

export default new Store(new Cart(), new Products(), new Pictures(), new Uploads());
