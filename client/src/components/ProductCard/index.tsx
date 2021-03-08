import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { moneyFormat } from '../../assets/helpers';
import router from '../../assets/router';
import CountButtons from '../../common/CountButtons';
import { Product } from '../../interface';
import ParallaxPicture from '../ParallaxPicture';
import css from './index.module.css';

interface IProps {
    product: Product;
}

const MAX_CONTENT = 150;

const ProductCard = ({ product }: IProps): ReactElement => {
    return (
        <div className={css.card}>
            <ParallaxPicture src={product.banner} alt={product.title} images={product.images} />

            <Link className={css.content} to={router.product.dynamic(product.id)}>
                <h3 className={css.name}>{product.title}</h3>
                <p className={css.description}>
                    {product.description.length > MAX_CONTENT
                        ? product.description.slice(0, MAX_CONTENT) + '...'
                        : product.description}
                </p>
            </Link>

            <div className={css.flex}>
                <p>{moneyFormat(product.price)} $</p>
                <p>amount: {product.amount}</p>
            </div>

            <pre>{product.pictures}</pre>

            <div className={css.flex}>
                <CountButtons max={product.amount} />

                <div className={css.action}>
                    <button className={css.cart} type="button">
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </button>
                    <button className={css.bay} type="button">
                        Bay
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
