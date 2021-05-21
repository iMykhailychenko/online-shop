import { observer } from 'mobx-react-lite';
import React, { ReactElement } from 'react';

import useStore from '../../../hooks/store.hook';
import IProducts from '../../../store/products/products.types';
import ProductModalLoader from '../Loaders/ProductModalLoader';
import ProductSlider from '../ProductSlider';
import css from './index.module.css';

const ProductModal = (): ReactElement => {
    const products = useStore<IProducts>(state => state.products);
    return products.loading ? (
        <ProductModalLoader />
    ) : (
        <>
            <div className={css.flex}>
                <div className={css.cell}>
                    <ProductSlider pictures={products.single?.pictures} alt={products.single?.title} />
                </div>
                <div className={css.cell}>
                    <h2 className={css.title}>{products.single?.title}</h2>
                    <p>{products.single?.description}</p>
                </div>
            </div>
            <div className={css.flex}>
                <div className={css.cell}></div>
                <div className={css.cell}></div>
            </div>
        </>
    );
};

export default observer(ProductModal);
