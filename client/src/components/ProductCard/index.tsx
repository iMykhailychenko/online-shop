import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import router from '../../assets/router';
import { Product } from '../../interface';
import ParallaxPicture from '../ParallaxPicture';
import css from './index.module.css';

interface IProps {
    product: Product;
}

const ProductCard = ({ product }: IProps): ReactElement => {
    return (
        <div className={css.card}>
            <ParallaxPicture src={product.banner} alt={product.name} images={product.images} />

            <Link className={css.content} to={router.product.dynamic(product.id)}>
                <h3 className={css.name}>{product.name}</h3>
                <p className={css.description}>{product.description}</p>
            </Link>
        </div>
    );
};

export default ProductCard;
