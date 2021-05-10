import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ChangeEvent, ReactElement, useState } from 'react';

import { IProduct, ISizes } from '../../../../interface';
import Input from '../../Input/input';
import Textarea from '../../Input/textarea';
import css from './index.module.css';
import SizeFields from './Size';

const INIT: Omit<IProduct, 'id'> = {
    banner: '',
    pictures: [],
    title: '',
    description: '',
    price: 0,
    rating: 0,
    sizes: [{ size: '', amount: 0 }],
};

const CreateForm = (): ReactElement => {
    const [value, setValue] = useState<Omit<IProduct, 'id'>>(INIT);

    const change = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setValue(val => ({ ...val, [event.target.name]: event.target.value }));
    };

    const validatePrice = (): void => {
        if (!value.price || !+value.price) return setValue({ ...value, price: 0 });
        setValue({ ...value, price: Math.round(+value.price * 100) / 100 });
    };

    const changeSize = (sizes: ISizes, inx: number): void => {
        setValue({ ...value, sizes: value.sizes.map((item, index) => (index === inx ? sizes : item)) });
    };
    const validateSize = (inx: number): void => {
        if (!value.sizes[inx].amount || !+value.sizes[inx].amount)
            return setValue({
                ...value,
                sizes: value.sizes.map((item, index) => (index === inx ? { ...item, amount: 0 } : item)),
            });

        setValue({
            ...value,
            sizes: value.sizes.map((item, index) =>
                index === inx ? { ...item, amount: Math.round(+value.sizes[inx].amount) } : item,
            ),
        });
    };

    const deleteSize = (inx: number): void => {
        if (value.sizes.length < 1) return;
        setValue(val => ({ ...val, sizes: val.sizes.filter((_, index) => index !== inx) }));
    };
    const addSize = (): void => {
        if (value.sizes.length > 10) return;
        setValue({ ...value, sizes: [...value.sizes, { size: '', amount: 0 }] });
    };

    return (
        <form className={css.form} action="#" method="post">
            <div className={css.wrp}>
                <h4>Product title</h4>
                <Input type="text" name="title" placeholder="title" value={value.title} onChange={change} />
            </div>

            <div className={css.wrp}>
                <h4>Product description</h4>
                <Textarea name="description" placeholder="description" value={value.description} onChange={change} />
            </div>

            <div className={css.wrp}>
                <h4>Product price</h4>
                <Input
                    type="text"
                    name="price"
                    placeholder="price"
                    value={value.price}
                    onChange={change}
                    onBlur={validatePrice}
                />
            </div>

            <h4>Product sizes (min 1, max 10)</h4>
            <div className={css.wrp}>
                {value.sizes.length
                    ? value.sizes.map<ReactElement>((item, index) => (
                          <SizeFields
                              key={index}
                              value={item}
                              index={index}
                              onChange={changeSize}
                              onBlur={validateSize}
                              onDelete={deleteSize}
                          />
                      ))
                    : null}
                <div className={css.center}>
                    <button type="button" className={css.add} onClick={addSize}>
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
            </div>
        </form>
    );
};

export default CreateForm;
