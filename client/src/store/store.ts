import cart from './cart';
import pictures from './pictures';
import products from './products';
import IStore from './store.types';
import uploads from './uploads';

class Store implements IStore {
    public cart = cart;
    public products = products;
    public pictures = pictures;
    public uploads = uploads;
}

export default new Store();
