import clsx from 'clsx';
import React, { ChangeEvent, ReactElement } from 'react';

import css from './index.module.css';

interface IProps {
    value: string | number;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
    name: string;
    className?: string;
    type?: string;
    placeholder?: string;
    error?: string;
}

const Input = ({
    value,
    onChange,
    onBlur,
    className,
    type = 'text',
    name,
    placeholder = '...',
    error,
}: IProps): ReactElement => (
    <div>
        <input
            type={type}
            name={name}
            value={value}
            onBlur={onBlur}
            onChange={onChange}
            placeholder={placeholder}
            className={clsx(css.input, error && css.error, className)}
        />
        {error && <small className={css.red}>{error}</small>}
    </div>
);

export default Input;
