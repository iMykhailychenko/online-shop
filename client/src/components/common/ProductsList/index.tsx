import { observer } from 'mobx-react-lite';
import React, { ReactElement } from 'react';

import useStore from '../../../hooks/store.hook';
import IProducts from '../../../store/products/products.types';
import ProductsLoader from '../Loaders/ProductsLoader';
import Pagination from '../Pagination';
import ProductCard from '../ProductCard';

const ProductsList = (): ReactElement => {
    const products = useStore<IProducts>(state => state.products);

    return (
        <>
            <ProductsLoader loading={products.loading} isEmpty={!products.products.data.length}>
                <>
                    {products.products.data.length
                        ? products.products.data.map(product => <ProductCard key={product.id} product={product} />)
                        : null}
                </>
            </ProductsLoader>

            {!products?.products?.total ? (
                <Pagination total={products?.products?.total || 0} onClick={products.push} onMore={products.more} />
            ) : null}
        </>
    );
};

export default observer(ProductsList);
