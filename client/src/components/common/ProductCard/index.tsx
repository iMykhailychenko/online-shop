import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { cutString } from '../../../assets/helpers';
import router from '../../../assets/router';
import { IProduct } from '../../../interface';
import css from './index.module.css';
import ParallaxPicture from './ParallaxPicture';
import ProductUtils from './ProductUtils';

interface IProps {
    product: IProduct;
}

const MAX_CONTENT = 70;

const ProductCard = ({ product }: IProps): ReactElement => {
    return (
        <div className={css.card}>
            <ParallaxPicture product={product} />

            <Link className={css.content} to={router.product.single.dynamic(product.id)}>
                <h3 className={css.name}>{product.title}</h3>
                <p className={css.description}>{cutString(product.description, MAX_CONTENT)}</p>
            </Link>

            <div className={css.utils}>
                <ProductUtils product={product} />
            </div>
        </div>
    );
};

export default ProductCard;
