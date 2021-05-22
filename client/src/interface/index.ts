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
    pictures: { id: number; url: string }[];
    sizes: ISizes[];
    // local
    amount?: number;
    selectedSize?: ISizes;
}

export type IUploadProduct = Omit<IProduct, 'id' | 'pictures'> & { pictures: string[] };

export interface Params {
    [key: string]: unknown;
}
