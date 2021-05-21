import clsx from 'clsx';
import React, { ReactElement } from 'react';

import css from './index.module.css';

const ProductModalLoader = (): ReactElement => {
    return (
        <>
            <div className={css.flex}>
                <div className={css.img} />

                <div className={css.flex}>
                    <div>
                        <div className={css.text} />
                        <div className={css.text} />
                        <div className={css.text} />
                        <div className={clsx(css.text, css.short)} />
                    </div>
                    <div>
                        <div className={css.text} />
                        <div className={css.text} />
                        <div className={clsx(css.text, css.short)} />
                    </div>
                </div>
            </div>
            <div className={css.flex}>
                <div className={css.flex}>
                    <div>
                        <div className={css.text} />
                        <div className={clsx(css.text, css.short)} />
                    </div>
                    <div>
                        <div className={css.text} />
                        <div className={clsx(css.text, css.short)} />
                    </div>
                </div>

                <div className={css.flex}>
                    <div>
                        <div className={css.text} />
                        <div className={clsx(css.text, css.short)} />
                    </div>
                    <div>
                        <div className={css.text} />
                        <div className={clsx(css.text, css.short)} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductModalLoader;
