import clsx from 'clsx';
import React, { ChangeEvent, ReactElement, useState } from 'react';

import css from './index.module.css';

interface IProps {
    className?: string;
    max: number;
}

const CountButtons = ({ max, className }: IProps): ReactElement => {
    const [value, setValue] = useState<number | string>('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.value === '') {
            setValue('');
            return;
        }

        if (!+event.target.value) return;
        setValue(+event.target.value);
    };

    const plus = (): void => {
        setValue(value => (+value >= max ? max : +value + 1));
    };

    const minus = (): void => {
        setValue(value => (+value <= 0 ? 0 : +value - 1));
    };

    const handleBlur = (): void => {
        if (+value >= max) {
            setValue(max);
            return;
        }

        if (+value <= 0) setValue(0);
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
