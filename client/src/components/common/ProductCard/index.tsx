import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { observer } from 'mobx-react-lite';
import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { moneyFormat } from '../../../assets/helpers';
import router from '../../../assets/router';
import useStore from '../../../hooks/store.hook';
import { IProduct } from '../../../interface';
import ICart from '../../../store/cart/cart.types';
import IProducts from '../../../store/products/products.types';
import CountButtons from '../CountButtons';
import ParallaxPicture from '../ParallaxPicture';
import css from './index.module.css';

interface IProps {
    product: IProduct;
}

const MAX_CONTENT = 150;

const ProductCard = ({ product }: IProps): ReactElement => {
    const cart = useStore<ICart>(state => state.cart);
    const products = useStore<IProducts>(state => state.products);
    const amount = product.amount || 1;

    const toggleValue = (value: string | number): void => {
        products.amount(product.id, +value);
        if (cart.productsId.includes(product.id)) cart.push({ ...product, amount: +value });
    };

    const handleAddToCart = (): void => {
        products.amount(product.id, amount);
        cart.push({ ...product, amount: amount });
    };

    const handleDeleteFromCart = (): void => {
        cart.delete(product.id);
    };

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
                <p>{moneyFormat(Math.round(product.price * (amount || 1) * 100) / 100)} $</p>
                <p>available: {product.available}</p>
            </div>

            <div className={css.flex}>
                <CountButtons max={product.available} value={amount} onChange={toggleValue} />

                <div className={css.action}>
                    {cart.productsId.includes(product.id) ? (
                        <button className={css.cart} type="button" onClick={handleDeleteFromCart}>
                            <FontAwesomeIcon icon={faMinus} />
                        </button>
                    ) : (
                        <button className={css.cart} type="button" onClick={handleAddToCart}>
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </button>
                    )}
                    <button className={css.bay} type="button">
                        Bay
                    </button>
                </div>
            </div>
        </div>
    );
};

export default observer(ProductCard);
