import React, { ReactElement } from 'react';

import Container from '../Container';
import css from './index.module.css';

const Footer = (): ReactElement => {
    return (
        <footer className={css.footer}>
            <Container>
                <>
                    <a
                        className={css.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/iMykhailychenko"
                    >
                        Ihor Mykhailychenko
                    </a>
                    <a
                        className={css.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ihor-mykhailychenko.netlify.app/"
                    >
                        Website
                    </a>
                    <a
                        className={css.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://blog-eta-teal.vercel.app/"
                    >
                        Blog
                    </a>
                </>
            </Container>
        </footer>
    );
};

export default Footer;
