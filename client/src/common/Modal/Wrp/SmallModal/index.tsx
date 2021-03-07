import clsx from 'clsx';
import React, { ReactElement } from 'react';

import CloseButton from '../../../CloseButton';
import { modal } from '../../index';
import css from '../index.module.css';

interface IProps {
    children: JSX.Element | JSX.Element[] | string;
}

const SmallModal = ({ children }: IProps): ReactElement => {
    return (
        <div className={clsx(css.modal, css.small)}>
            <CloseButton onClick={modal.close} />
            <div className={css.inner}>{children}</div>
        </div>
    );
};

export default SmallModal;
