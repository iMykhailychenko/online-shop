import { IPagination, IProduct } from '../../interface';

export default interface IProducts {
    loading: boolean;
    products: IPagination<IProduct[]>;
    element: HTMLDivElement | null;
    setElement: (dom: HTMLDivElement) => void;
    setProducts: () => void;
}
