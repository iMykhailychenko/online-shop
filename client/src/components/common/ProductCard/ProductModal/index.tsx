import { observer } from 'mobx-react-lite';
import React, { ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';

import { cutString } from '../../../../assets/helpers';
import router from '../../../../assets/router';
import useStore from '../../../../hooks/store.hook';
import IProducts from '../../../../store/products/products.types';
import ProductModalLoader from '../../Loaders/ProductModalLoader';
import ProductSlider from '../ProductSlider';
import ProductUtils from '../ProductUtils';
import css from './index.module.css';

const MAX_LENGTH = 100;
const ProductModal = (): ReactElement => {
    const [maxText, setMaxText] = useState<number>(MAX_LENGTH);
    const products = useStore<IProducts>(state => state.products);
    const hasReadMoreBtn = (products.single?.description?.length || 0) > MAX_LENGTH;

    const readMore = (): void => {
        setMaxText(val => (val > MAX_LENGTH ? MAX_LENGTH : (products.single?.description?.length || 0) + 10));
    };

    return products.loading ? (
        <ProductModalLoader />
    ) : (
        <>
            <div className={css.flex}>
                <div className={css.cell}>
                    <ProductSlider pictures={products.single?.pictures} alt={products.single?.title} />
                </div>
                <div className={css.cell}>
                    <Link className={css.title_link} to={router.product.single.dynamic(products.single?.id || 1)}>
                        <h2 className={css.title}>{products.single?.title}</h2>
                    </Link>
                    <p>{cutString(products.single?.description || '...', maxText)}</p>
                    {hasReadMoreBtn && (
                        <button className={css.link} type="button" onClick={readMore}>
                            {maxText > MAX_LENGTH ? 'Show less' : 'Read more'}
                        </button>
                    )}

                    <h3 className={css.order_details}>Order details:</h3>
                    {products.single ? <ProductUtils product={products.single} /> : null}
                </div>
            </div>
        </>
    );
};

export default observer(ProductModal);
