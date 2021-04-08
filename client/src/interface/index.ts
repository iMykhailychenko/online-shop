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
    available: number;
    title: string;
    description: string;
    rating: number;
    pictures: string[];
    amount?: number;
}

export interface Params {
    [key: string]: unknown;
}
