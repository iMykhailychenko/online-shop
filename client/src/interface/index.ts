export interface IPagination<Data> {
    total: number;
    page: number;
    data: Data;
}

export interface IProduct {
    id: number;
    banner: string;
    images?: string[];
    price: number;
    amount: number;
    title: string;
    description: string;
    rating: number;
    pictures: string[];
}

export interface ICartProduct extends IProduct {
    total: number;
}
