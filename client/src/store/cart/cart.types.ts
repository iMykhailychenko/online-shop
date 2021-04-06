import { ICartProduct } from '../../interface';

export default interface ICart {
    amount: number;
    products: ICartProduct[];
}
