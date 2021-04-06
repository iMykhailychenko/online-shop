import React, { ReactElement } from 'react';

import Container from '../Container';
import css from './index.module.css';

const Footer = (): ReactElement => {
    return (
        <footer className={css.footer}>
            <Container>Lorem ipsum dolor sit amet</Container>
        </footer>
    );
};

export default Footer;
