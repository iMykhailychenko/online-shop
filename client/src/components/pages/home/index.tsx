import { observer } from 'mobx-react-lite';
import queryString from 'query-string';
import React, { ReactElement, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import useStore from '../../../hooks/store.hook';
import IProducts from '../../../store/products/products.types';
import About from '../../common/About';
import Banner from '../../common/Banner';
import ProductsList from '../../common/ProductsList';

const Home = (): ReactElement => {
    const history = useHistory();
    const page = +(queryString.parse(history.location.search)?.page || 1);

    const products = useStore<IProducts>(state => state.products);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        products.push(page).catch(error => console.dir(error));
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
