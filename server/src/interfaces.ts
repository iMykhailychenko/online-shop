export interface Pagination<T> {
    page: number;
    total: number;
    data: T | null;
}
