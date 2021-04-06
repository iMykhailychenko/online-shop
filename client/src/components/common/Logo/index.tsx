import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import router from '../../../assets/router';
import css from './index.module.css';

const Logo = (): ReactElement => {
    return (
        <Link to={router.home.path}>
            <img className={css.logo} src="/logo.png" alt="" />
        </Link>
    );
};

export default Logo;
