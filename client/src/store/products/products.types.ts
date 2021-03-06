import { IPagination, Product } from '../../interface';

export default interface IProducts {
    loading: boolean;
    products: IPagination<Product[]>;
    element: HTMLDivElement | null;
    setElement: (dom: HTMLDivElement) => void;
    setProducts: () => void;
}
