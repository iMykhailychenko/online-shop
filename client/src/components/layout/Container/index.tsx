import clsx from 'clsx';
import React, { ReactElement } from 'react';

import css from './index.module.css';

interface IProps {
    children: JSX.Element | JSX.Element[] | string;
    className?: string;
}

const Container = ({ children, className }: IProps): ReactElement => {
    return <div className={clsx(css.container, className)}>{children}</div>;
};

export default Container;
