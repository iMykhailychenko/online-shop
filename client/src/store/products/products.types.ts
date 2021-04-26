import { IProduct, Pagination } from '../../interface';

export default interface IProducts {
    loading: boolean;
    products: Pagination<IProduct[]>;
    element: HTMLDivElement | null;
    setElement: (dom: HTMLDivElement) => void;
    push: (page: number) => Promise<void>;
    more: (page: number) => Promise<void>;
    amount: (id: number, amount: number) => void;
}
