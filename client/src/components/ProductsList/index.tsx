import { observer } from 'mobx-react-lite';
import React, { ReactElement } from 'react';

import ProductsLoader from '../../common/Loaders/ProductsLoader';
import products from '../../store/products';
import ProductCard from '../ProductCard';

const ProductsList = (): ReactElement => {
    return (
        <ProductsLoader loading={products.loading} isEmpty={!products.products.data.length}>
            <>
                {products.products.data.length
                    ? products.products.data.map(product => <ProductCard key={product.id} product={product} />)
                    : null}
            </>
        </ProductsLoader>
    );
};

export default observer(ProductsList);
