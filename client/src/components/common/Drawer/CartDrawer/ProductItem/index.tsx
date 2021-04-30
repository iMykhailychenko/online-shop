import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { observer } from 'mobx-react-lite';
import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { moneyFormat } from '../../../../../assets/helpers';
import router from '../../../../../assets/router';
import useStore from '../../../../../hooks/store.hook';
import { IProduct } from '../../../../../interface';
import ICart from '../../../../../store/cart/cart.types';
import IProducts from '../../../../../store/products/products.types';
import CountButtons from '../../../CountButtons';
import css from './index.module.css';

interface IProps {
    product: IProduct;
}

const ProductItem = ({ product }: IProps): ReactElement => {
    const cart = useStore<ICart>(state => state.cart);
    const products = useStore<IProducts>(state => state.products);
    const amount = product.amount || 1;

    const toggleValue = (value: string | number): void => {
        products.amount(product.id, +value);
        cart.push({ ...product, amount: +value });
    };

    const handleDeleteFromCart = (): void => {
        cart.delete(product.id);
    };

    return (
        <li className={css.card}>
            <div className={css.flex}>
                <img className={css.img} src={product.banner} alt="" />
                <div className={css.inner}>
                    <Link className={css.content} to={router.product.single.dynamic(product.id)}>
                        <h3 className={css.name}>{product.title}</h3>
                    </Link>
                    <div className={css.flex}>
                        <p>{moneyFormat(Math.round(product.price * (amount || 1) * 100) / 100)} $</p>
                        <p>available: {product.available}</p>
                    </div>
                    <div className={clsx(css.flex, css.count)}>
                        <CountButtons max={product.available} value={amount} onChange={toggleValue} />
                        <div className={css.action}>
                            <button className={css.cart} type="button" onClick={handleDeleteFromCart}>
                                <FontAwesomeIcon icon={faMinus} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default observer(ProductItem);
