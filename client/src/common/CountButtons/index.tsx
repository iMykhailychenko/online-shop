import clsx from 'clsx';
import React, { ChangeEvent, ReactElement } from 'react';

import css from './index.module.css';

interface IProps {
    className?: string;
    max: number;
    value: number | string;
    onChange: (value: number | string) => void;
}

const CountButtons = ({ max, className, onChange, value }: IProps): ReactElement => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.value === '') {
            onChange('');
            return;
        }

        if (!+event.target.value) return;
        onChange(+event.target.value);
    };

    const plus = (): void => {
        onChange(+value >= max ? max : +value + 1);
    };

    const minus = (): void => {
        onChange(+value <= 0 ? 0 : +value - 1);
    };

    const handleBlur = (): void => {
        if (+value >= max) {
            onChange(max);
            return;
        }

        if (+value <= 0) onChange(0);
    };

    return (
        <div className={clsx(className)}>
            <button className={css.btn} onClick={minus}>
                -1
            </button>
            <input className={css.input} type="text" value={value} onChange={handleChange} onBlur={handleBlur} />
            <button className={css.btn} onClick={plus}>
                +1
            </button>
        </div>
    );
};

export default CountButtons;
