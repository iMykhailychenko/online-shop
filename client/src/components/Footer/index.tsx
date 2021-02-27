import React, { ReactElement } from 'react';

import Container from '../Container';
import css from './index.module.css';

const Footer = (): ReactElement => {
    return (
        <footer className={css.footer}>
            <Container>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium assumenda autem delectus eius enim
                expedita illum inventore itaque, laboriosam nam nulla obcaecati odio perspiciatis porro quasi rem
                repellat reprehenderit temporibus!
            </Container>
        </footer>
    );
};

export default Footer;
