export interface Pagination<Data> {
    total: number;
    page: number;
    data: Data;
}

export interface ISizes {
    size: string;
    amount: number;
}

export interface IProduct {
    id: number;
    banner: string;
    price: number;
    title: string;
    description: string;
    rating: number;
    pictures: string[];
    sizes: ISizes[];
    // local
    amount?: number;
    selectedSize?: ISizes;
}

export type ISingleProduct = Omit<IProduct, 'pictures'> & {
    pictures: { id: number; url: string }[];
};

export interface Params {
    [key: string]: unknown;
}
