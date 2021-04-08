import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { observer } from 'mobx-react-lite';
import React, { ReactElement, useState } from 'react';
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
    const [value, setValue] = useState<number | string>(1);
    const cart = useStore<ICart>(state => state.cart);
    const products = useStore<IProducts>(state => state.products);

    const toggleValue = (value: string | number): void => {
        setValue(value);
        products.amount(product.id, +value);
    };

    const handleDeleteFromCart = (): void => {
        products.amount(product.id, +value);
        cart.push({ ...product, amount: +value });
    };

    return (
        <li className={css.card}>
            <div className={css.flex}>
                <img className={css.img} src={product.banner} alt="" />
                <div className={css.inner}>
                    <Link className={css.content} to={router.product.dynamic(product.id)}>
                        <h3 className={css.name}>{product.title}</h3>
                    </Link>
                    <div className={css.flex}>
                        <p>{moneyFormat(Math.round(product.price * (!+value ? 1 : +value) * 100) / 100)} $</p>
                        <p>available: {product.available}</p>
                    </div>
                </div>
            </div>

            <div className={css.flex}>
                <CountButtons max={product.available} value={value} onChange={toggleValue} />
                <div className={css.action}>
                    <button className={css.cart} type="button" onClick={handleDeleteFromCart}>
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </button>
                </div>
            </div>
        </li>
    );
};

export default observer(ProductItem);
