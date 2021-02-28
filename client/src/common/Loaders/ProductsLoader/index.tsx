import React, { ReactElement } from 'react';

import css from './index.module.css';

interface IProps {
    loading: boolean;
    isEmpty: boolean;
    children: ReactElement;
}

const LOADING_ARRAY = [1, 2];

const ProductsLoader = ({ loading, isEmpty, children }: IProps): ReactElement => {
    return (
        <>
            {loading ? (
                <div className={css.grid}>
                    {LOADING_ARRAY.map(item => (
                        <div className={css.wrp} key={item}>
                            <div className={css.img} />
                            <div className={css.text} />
                            <div className={css.text} />
                            <div className={css.short} />
                        </div>
                    ))}
                </div>
            ) : isEmpty ? (
                <p>Nothing to show</p>
            ) : (
                <div className={css.grid}>{children}</div>
            )}
        </>
    );
};

export default ProductsLoader;
