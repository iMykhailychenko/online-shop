import { IProduct } from '../../interface';

export default interface ICart {
    drawer: boolean;
    amount: number;
    products: IProduct[];
    push: (product: IProduct) => void;
    delete: (id: number) => void;
    toggleCart: () => void;
    countAmount: (products: IProduct[]) => void;
}
