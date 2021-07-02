import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { observer } from 'mobx-react-lite';
import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import useStore from '../../../hooks/store.hook';
import { Cart } from '../../../store/cart';
import pop from '../../../styles/transitions/pop.module.css';
import NumberCircle from '../NumberCircle';
import css from './index.module.css';

const ScrollCart = (): ReactElement => {
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const [top, setTop] = useState(false);
    const cart = useStore<Cart>(state => state.cart);

    useEffect(() => {
        const handleScroll = (): void => setTop(window.scrollY >= 150);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <CSSTransition in={top && !!cart.products.length} timeout={600} classNames={pop} unmountOnExit>
            <button className={css.btn} ref={buttonRef} onClick={cart.toggleCart} type="button">
                <FontAwesomeIcon icon={faShoppingCart} />
                <NumberCircle className={css.number} count={cart.amount} />
            </button>
        </CSSTransition>
    );
};

export default observer(ScrollCart);
