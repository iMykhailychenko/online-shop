import { observer } from 'mobx-react-lite';
import React, { ReactElement } from 'react';

import useStore from '../../../../hooks/store.hook';
import ICart from '../../../../store/cart/cart.types';
import Drawer from '../index';
import ProductItem from './ProductItem';

const CartDrawer = (): ReactElement => {
    const cart = useStore<ICart>(state => state.cart);
    return (
        <Drawer width={50} onToggle={cart.toggleCart} open={cart.drawer}>
            <>
                <h2>Products in cart:</h2>
                <ul>
                    {cart.products.map(item => (
                        <ProductItem key={item.id} product={item} />
                    ))}
                </ul>
            </>
        </Drawer>
    );
};

export default observer(CartDrawer);
