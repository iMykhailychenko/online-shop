import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { observer } from 'mobx-react-lite';
import React, { ChangeEvent, FormEvent, ReactElement, useState } from 'react';

import useStore from '../../../../hooks/store.hook';
import { IProduct, ISizes } from '../../../../interface';
import IProducts from '../../../../store/products/products.types';
import { IUploads } from '../../../../store/uploads/uploads.types';
import Input from '../../Input/input';
import Textarea from '../../Input/textarea';
import validation, { IError } from './CreateForm.validation';
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
    const upload = useStore<IUploads>(state => state.uploads);
    const products = useStore<IProducts>(state => state.products);

    const [value, setValue] = useState<Omit<IProduct, 'id'>>(INIT);
    const [error, setError] = useState<IError>({});

    const change = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setValue(val => ({ ...val, [event.target.name]: event.target.value }));
        setError({});
    };

    const validatePrice = (): void => {
        if (!value.price || !+value.price) return setValue({ ...value, price: 0 });
        setValue({ ...value, price: Math.round(+value.price * 100) / 100 });
    };

    const changeSize = (sizes: ISizes, inx: number): void => {
        setValue({ ...value, sizes: value.sizes.map((item, index) => (index === inx ? sizes : item)) });
        setError({});
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
        if (value.sizes.length < 2) return;
        setValue(val => ({ ...val, sizes: val.sizes.filter((_, index) => index !== inx) }));
        setError({});
    };
    const addSize = (): void => {
        if (value.sizes.length > 10) return;
        setValue({ ...value, sizes: [...value.sizes, { size: '', amount: 0 }] });
    };

    const handleSubmit = async (event: FormEvent): Promise<void> => {
        event.preventDefault();
        if (validation(value, setError)) return;

        try {
            const pictures = await upload.submit();
            if (!pictures) return;
            await products.create({ ...value, banner: pictures[0], pictures });
        } catch (error) {
            console.dir(error);
        }
    };

    return (
        <form className={css.form} action="#" method="post" onSubmit={handleSubmit}>
            <div className={css.wrp}>
                <h4>Product title</h4>
                <Input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={value.title}
                    onChange={change}
                    error={error.title}
                />
            </div>

            <div className={css.wrp}>
                <h4>Product description</h4>
                <Textarea
                    name="description"
                    placeholder="Description"
                    value={value.description}
                    onChange={change}
                    error={error.description}
                />
            </div>

            <div className={css.wrp}>
                <h4>Product price</h4>
                <Input
                    type="text"
                    name="price"
                    placeholder="Price"
                    value={value.price || ''}
                    onChange={change}
                    onBlur={validatePrice}
                    error={error.price}
                />
            </div>

            <h4>Product sizes (min 1, max 10)</h4>
            {error.sizes && <small className={css.red}>{error.sizes}</small>}
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

            <button type="submit" className={css.submit}>
                submit
            </button>
        </form>
    );
};

export default observer(CreateForm);
