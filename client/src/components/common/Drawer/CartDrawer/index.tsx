import { observer } from 'mobx-react-lite';
import React, { ReactElement } from 'react';

import { moneyFormat } from '../../../../assets/helpers';
import useStore from '../../../../hooks/store.hook';
import { Cart } from '../../../../store/cart';
import Drawer from '../index';
import css from './index.module.css';
import ProductItem from './ProductItem';

const CartDrawer = (): ReactElement => {
    const cart = useStore<Cart>(state => state.cart);
    const totalPrice = cart.products.reduce((acc, item) => {
        acc += item.price * (item.amount || 1);
        return acc;
    }, 0);

    return (
        <Drawer width={50} onToggle={cart.toggleCart} open={cart.drawer}>
            <>
                <h2 className={css.title}>Products in cart:</h2>
                <p className={css.text}>
                    total amount: <span>{cart.amount}</span> items
                </p>
                <p className={css.text}>
                    total price: <span>{moneyFormat(totalPrice)}</span> $
                </p>
                <ul className={css.list}>
                    {cart.products.map(item => (
                        <ProductItem key={item.id + (item.selectedSize?.size || '')} product={item} />
                    ))}
                </ul>
            </>
        </Drawer>
    );
};

export default observer(CartDrawer);
