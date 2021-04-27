import { observer } from 'mobx-react-lite';
import queryString from 'query-string';
import React, { ReactElement, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import useStore from '../../../hooks/store.hook';
import IProducts from '../../../store/products/products.types';

const Product = (): ReactElement => {
    const history = useHistory();
    const productId = +(queryString.parse(history.location.search)?.product || 1);
    const products = useStore<IProducts>(state => state.products);

    useEffect(() => {
        if (productId) products.findById(productId);
    }, [productId]);

    return <pre>{JSON.stringify(products.single, null, 4)}</pre>;
};

export default observer(Product);
