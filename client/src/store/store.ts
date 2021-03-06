import cart from './cart';
import pictures from './pictures';
import products from './products';
import IStore from './store.types';

class Store implements IStore {
    cart = cart;
    products = products;
    pictures = pictures;
}

export default new Store();
