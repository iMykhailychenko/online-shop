import React, { ReactElement, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import router from '../../assets/router';
import CartDrawer from '../common/Drawer/CartDrawer';
import ScrollTop from '../common/ScrollTopBtn';
import Body from '../layout/Body';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import css from './index.module.css';

const App = (): ReactElement => {
    return (
        <Suspense fallback={null}>
            <BrowserRouter>
                <div className={css.main}>
                    <Header />
                    <Body>
                        <Switch>
                            <Route exact path={router.home.path} component={router.home.component} />
                            <Route path={router.auth.path} component={router.auth.component} />
                            <Route path={router.product.path} component={router.product.component} />
                            <Route path={router.profile.path} component={router.profile.component} />
                        </Switch>
                    </Body>
                    <CartDrawer />
                    <ScrollTop />
                    <Footer />
                </div>
            </BrowserRouter>
        </Suspense>
    );
};

export default App;
