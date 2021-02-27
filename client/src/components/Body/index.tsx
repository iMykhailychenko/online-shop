import React, { ReactElement } from 'react';

import Container from '../Container';
import css from './index.module.css';

interface IProps {
    children: JSX.Element | JSX.Element[] | string;
    className?: string;
}

const Body = ({ children, className }: IProps): ReactElement => {
    return (
        <div className={css.body}>
            <Container className={className}>{children}</Container>
        </div>
    );
};

export default Body;
