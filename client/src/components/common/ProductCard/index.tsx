import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { observer } from 'mobx-react-lite';
import React, { ChangeEvent, ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';

import { moneyFormat } from '../../../assets/helpers';
import router from '../../../assets/router';
import useStore from '../../../hooks/store.hook';
import { IProduct, ISizes } from '../../../interface';
import ICart from '../../../store/cart/cart.types';
import IProducts from '../../../store/products/products.types';
import CountButtons from '../CountButtons';
import ParallaxPicture from '../ParallaxPicture';
import css from './index.module.css';

interface IProps {
    product: IProduct;
}

const MAX_CONTENT = 80;

const ProductCard = ({ product }: IProps): ReactElement => {
    const cart = useStore<ICart>(state => state.cart);
    const products = useStore<IProducts>(state => state.products);
    const amount = product.amount || 1;

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
        <div className={css.card}>
            <ParallaxPicture src={product.banner} alt={product.title} images={product.pictures} />

            <Link className={css.content} to={router.product.single.dynamic(product.id)}>
                <h3 className={css.name}>{product.title}</h3>
                <p className={css.description}>
                    {product.description.length > MAX_CONTENT
                        ? product.description.slice(0, MAX_CONTENT) + '...'
                        : product.description}
                </p>
            </Link>

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

                <div className={css.action}>
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
        </div>
    );
};

export default observer(ProductCard);
