import { observer } from 'mobx-react-lite';
import React, { ReactElement, useEffect, useRef } from 'react';

import About from '../../common/About';
import Banner from '../../components/Banner';
import ProductsList from '../../components/ProductsList';
import useStore from '../../hooks/store.hook';
import IProducts from '../../store/products/products.types';

const Home = (): ReactElement => {
    const products = useStore<IProducts>(state => state.products);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        products.setProducts();
    }, []);

    useEffect(() => {
        if (ref.current) products.setElement(ref.current);
    }, [ref]);

    return (
        <div>
            <Banner />
            <About />
            <div ref={ref} id="products">
                <ProductsList />
            </div>
        </div>
    );
};

export default observer(Home);
