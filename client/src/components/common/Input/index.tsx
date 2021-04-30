import clsx from 'clsx';
import React, { ChangeEvent, ReactElement } from 'react';

import css from './index.module.css';

interface IProps {
    value: string | number;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    name: string;
    className?: string;
    type?: string;
    placeholder?: string;
    error?: string;
}

const Input = ({
    value,
    onChange,
    className,
    type = 'text',
    name,
    placeholder = '...',
    error,
}: IProps): ReactElement => (
    <>
        <input
            value={value}
            onChange={onChange}
            className={clsx(css.input, error && css.error, className)}
            type={type}
            name={name}
            placeholder={placeholder}
        />
        {error && <small className={css.red}>{error}</small>}
    </>
);

export default Input;
