export interface IPagination<T> {
    total: number;
    page: number;
    data: T;
}

export interface Product {
    id: number;
    banner: string;
    images?: string[];
    price: number;
    total: number;
    name: string;
    description: string;
    rating: number;
}
