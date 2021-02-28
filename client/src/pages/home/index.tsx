import { observer } from 'mobx-react-lite';
import React, { ReactElement, useEffect, useRef } from 'react';

import About from '../../common/About';
import Banner from '../../components/Banner';
import ProductsList from '../../components/ProductsList';
import products from '../../store/products';

const Home = (): ReactElement => {
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
