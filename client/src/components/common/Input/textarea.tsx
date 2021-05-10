import clsx from 'clsx';
import React, { ChangeEvent, ReactElement } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

import css from './index.module.css';

interface IProps {
    value: string | number;
    onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    onBlur?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    name: string;
    className?: string;
    type?: string;
    placeholder?: string;
    error?: string;
}

const Textarea = ({ value, onChange, onBlur, className, name, placeholder = '...', error }: IProps): ReactElement => (
    <>
        <TextareaAutosize
            name={name}
            value={value}
            onBlur={onBlur}
            onChange={onChange}
            placeholder={placeholder}
            className={clsx(css.input, css.textarea, error && css.error, className)}
        />
        {error && <small className={css.red}>{error}</small>}
    </>
);

export default Textarea;
