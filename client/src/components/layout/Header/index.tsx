import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { Location } from 'history';
import { observer } from 'mobx-react-lite';
import React, { ReactElement, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AnchorLink from 'react-scroll/modules/components/Link';

import router from '../../../assets/router';
import useStore from '../../../hooks/store.hook';
import ICart from '../../../store/cart/cart.types';
import IProducts from '../../../store/products/products.types';
import Logo from '../../common/Logo';
import NumberCircle from '../../common/NumberCircle';
import Container from '../Container';
import AuthHeader from './auth';
import css from './index.module.css';

const Header = (): ReactElement => {
    const history = useHistory();
    const [location, setLoading] = useState<Location>(history.location);

    const cart = useStore<ICart>(state => state.cart);
    const products = useStore<IProducts>(state => state.products);

    useEffect(() => {
        if (location.hash === '#products' && products.element) {
            window.scrollTo({ top: products.element.offsetTop - 100, behavior: 'smooth' });
        }
    }, [products.element]);

    useEffect(() => {
        history.listen(location => {
            setLoading(location);
        });
    }, []);

    return (
        <header className={css.header}>
            <Container className={css.flex}>
                <>
                    <Logo />
                    <div className={css.flex}>
                        <AuthHeader />
                        <button className={clsx(css.flex, css.cart)} onClick={cart.toggleCart} type="button">
                            <FontAwesomeIcon icon={faShoppingCart} />
                            <NumberCircle className={css.number} count={cart.amount} />
                        </button>
                        {location.pathname === router.home.path ? (
                            <AnchorLink
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className={css.btn}
                                to="products"
                                tabIndex={0}
                            >
                                View all t-shirts
                            </AnchorLink>
                        ) : (
                            <Link className={css.btn} to={router.home.path + '#products'}>
                                View all t-shirts
                            </Link>
                        )}
                    </div>
                </>
            </Container>
        </header>
    );
};

export default observer(Header);
