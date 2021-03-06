import { makeAutoObservable } from 'mobx';

import { IPagination, Product } from '../../interface';
import IProducts from './products.types';

const temp: Product[] = [
    {
        id: 1,
        banner:
            'https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
        images: [
            'https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
        ],
        price: 200.21,
        total: 200,
        name: 'White',
        description: 'Yogyakarta, Yogyakarta City, Special Region of Yogyakarta, Indonesia',
        rating: 4.3,
    },
    {
        id: 2,
        banner:
            'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
        images: [
            'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
        ],
        price: 130.0,
        total: 200,
        name: 'Black',
        description: 'Yogyakarta, Yogyakarta City, Special Region of Yogyakarta, Indonesia',
        rating: 4.1,
    },
    {
        id: 3,
        banner:
            'https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80',
        images: [
            'https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80',
        ],
        price: 230.0,
        total: 120,
        name: 'Green',
        description: 'Yogyakarta, Yogyakarta City, Special Region of Yogyakarta, Indonesia',
        rating: 5,
    },
    {
        id: 4,
        banner:
            'https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
        images: [
            'https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
        ],
        price: 200.21,
        total: 200,
        name: 'White',
        description: 'Yogyakarta, Yogyakarta City, Special Region of Yogyakarta, Indonesia',
        rating: 4.3,
    },
    {
        id: 5,
        banner:
            'https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
        images: [
            'https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
        ],
        price: 200.21,
        total: 200,
        name: 'White',
        description: 'Yogyakarta, Yogyakarta City, Special Region of Yogyakarta, Indonesia',
        rating: 4.3,
    },
];

class Index implements IProducts {
    public loading = true;
    public products: IPagination<Product[]> = { total: 0, page: 0, data: [] };
    public element: HTMLDivElement | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    setElement = (dom: HTMLDivElement) => {
        this.element = dom;
    };

    setProducts = () => {
        this.loading = true;

        // get data
        this.products.total = 5;
        this.products.page = 1;
        this.products.data = temp;

        this.loading = false;
    };
}

export default new Index();
