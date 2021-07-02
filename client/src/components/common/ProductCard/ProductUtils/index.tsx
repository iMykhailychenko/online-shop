import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { observer } from 'mobx-react-lite';
import React, { ChangeEvent, ReactElement, useState } from 'react';

import { moneyFormat } from '../../../../assets/helpers';
import useStore from '../../../../hooks/store.hook';
import { IProduct, ISizes } from '../../../../interface';
import { Cart } from '../../../../store/cart';
import { Products } from '../../../../store/products';
import CountButtons from '../CountButtons';
import css from './index.module.css';

interface IProps {
    product: IProduct;
}

const ProductUtils = ({ product }: IProps): ReactElement => {
    const amount = product.amount || 1;
    const cart = useStore<Cart>(state => state.cart);
    const products = useStore<Products>(state => state.products);
    const [available, setAvailable] = useState<ISizes>(product.sizes[0]);

    const handleSelectSize = (event: ChangeEvent<HTMLSelectElement>): void => {
        setAvailable(
            product.sizes.find(item => item.size === event.target.value) || {
                size: event.target.value,
                amount: 0,
            },
        );
    };

    const handleOnBlur = (): void => {
        // pass
    };

    const toggleValue = (value: string | number): void => {
        products.amount(product.id, +value);
        if (cart.products.find(item => item.id === product.id && available.size === item.selectedSize?.size))
            cart.push({ ...product, amount: +value, selectedSize: available });
    };

    const handleAddToCart = (): void => {
        products.amount(product.id, amount);
        cart.push({ ...product, amount, selectedSize: available });
    };

    const handleDeleteFromCart = (): void => {
        cart.delete(product.id, available.size);
    };

    return (
        <>
            <div className={css.flex}>
                <p>Select t-shirt size:</p>
                <select
                    className={css.select}
                    name="size"
                    value={available.size}
                    onChange={handleSelectSize}
                    onBlur={handleOnBlur}
                >
                    {product.sizes.map<ReactElement>(size => (
                        <option key={size.size} value={size.size}>
                            {size.size.toUpperCase()}
                        </option>
                    ))}
                </select>
            </div>

            <div className={css.flex}>
                <p>{moneyFormat(Math.round(product.price * (amount || 1) * 100) / 100)} $</p>
                <p>available: {available.amount}</p>
            </div>

            <div className={css.flex}>
                <CountButtons max={available.amount} value={amount} onChange={toggleValue} />

                <div>
                    {cart.products.find(
                        item => item.id === product.id && available.size === item.selectedSize?.size,
                    ) ? (
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
        </>
    );
};

export default observer(ProductUtils);
