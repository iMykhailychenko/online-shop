import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ChangeEvent, ReactElement } from 'react';

import { ISizes } from '../../../../../interface';
import Input from '../../../Input/input';
import css from '../index.module.css';

interface IProps {
    value: ISizes;
    index: number;
    onChange: (value: ISizes, index: number) => void;
    onBlur: (index: number) => void;
    onDelete: (index: number) => void;
}

const SizeFields = ({ index, value, onChange, onBlur, onDelete }: IProps): ReactElement => {
    const change = (event: ChangeEvent<HTMLInputElement>): void => {
        onChange({ ...value, [event.target.name]: event.target.value }, index);
    };
    const blur = (): void => {
        onBlur(index);
    };

    const handleDelete = (): void => {
        onDelete(index);
    };

    return (
        <div className={css.flex}>
            <Input
                type="text"
                name="size"
                placeholder="Small/S Medium/M Large/L etc."
                value={value.size || ''}
                onChange={change}
            />
            <Input
                type="text"
                name="amount"
                placeholder="amount"
                value={value.amount || ''}
                onChange={change}
                onBlur={blur}
            />
            <button type="button" className={css.delete} onClick={handleDelete}>
                <FontAwesomeIcon icon={faMinus} />
            </button>
        </div>
    );
};

export default SizeFields;
