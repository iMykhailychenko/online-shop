import React, { ReactElement, useState } from 'react';

import css from './index.module.css';

interface IProps {
    alt?: string;
    pictures?: { id: number; url: string }[];
}

const ProductSlider = ({ pictures = [], alt = '...' }: IProps): ReactElement => {
    const [index, setIndex] = useState<number>(0);

    const prev = (): void => {
        setIndex(val => (val < 1 ? pictures?.length - 1 : val - 1));
    };

    const next = (): void => {
        setIndex(val => (val < pictures?.length - 1 ? val + 1 : 0));
    };

    return pictures?.length ? (
        pictures?.length > 1 ? (
            <div className={css.wrp}>
                <img className={css.img} src={pictures[index].url} alt={alt} />
                <button type="button" onClick={prev}>
                    prev
                </button>
                <button type="button" onClick={next}>
                    next
                </button>
            </div>
        ) : (
            <img className={css.img} src={pictures[0].url} alt={alt} />
        )
    ) : (
        <img className={css.img} src="/no_photo.svg" alt={alt} />
    );
};

export default ProductSlider;
