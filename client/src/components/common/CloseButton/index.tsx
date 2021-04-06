import clsx from 'clsx';
import React, { MouseEvent, ReactElement } from 'react';

import css from './index.module.css';

interface IProps {
    className?: string;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
const CloseButton = ({ onClick, className }: IProps): ReactElement => (
    <button className={clsx(css.btn, className)} onClick={onClick} type="button">
        close
    </button>
);

export default CloseButton;
