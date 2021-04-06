import { observer } from 'mobx-react-lite';
import React, { ReactElement, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AnchorLink from 'react-scroll/modules/components/Link';

import router from '../../../assets/router';
import products from '../../../store/products';
import Logo from '../../common/Logo';
import Container from '../Container';
import css from './index.module.css';

const Header = (): ReactElement => {
    const history = useHistory();

    useEffect(() => {
        if (history.location.hash === '#products' && products.element) {
            window.scrollTo({ top: products.element.offsetTop - 100, behavior: 'smooth' });
            history.push(router.home.path);
        }
    }, [products.element, history.location.pathname]);

    return (
        <header className={css.header}>
            <Container className={css.flex}>
                <>
                    <Logo />
                    {history.location.pathname === router.home.path ? (
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
                </>
            </Container>
        </header>
    );
};

export default observer(Header);
