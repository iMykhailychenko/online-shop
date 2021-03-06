import ICart from './cart/cart.types';
import IPictures from './pictures/pictures.types';
import IProducts from './products/products.types';

export default interface IStore {
    cart: ICart;
    pictures: IPictures;
    products: IProducts;
}
