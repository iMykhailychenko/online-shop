export interface IPagination<Data> {
    total: number;
    page: number;
    data: Data;
}

export interface Product {
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
