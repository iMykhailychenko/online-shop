import clsx from 'clsx';
import React, { ReactElement } from 'react';

import css from './index.module.css';

interface IProps {
    className?: string;
    count?: number;
}
const NumberCircle = ({ className, count = 0 }: IProps): ReactElement => {
    return <div className={clsx(css.root, className)}>{count < 10 ? count : '+9'}</div>;
};

export default NumberCircle;
