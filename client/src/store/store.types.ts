import ICart from './cart/cart.types';
import IPictures from './pictures/pictures.types';
import IProducts from './products/products.types';
import { IUploads } from './uploads/uploads.types';

export default interface IStore {
    cart: ICart;
    pictures: IPictures;
    products: IProducts;
    uploads: IUploads;
}
