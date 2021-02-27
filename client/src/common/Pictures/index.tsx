import React, { ReactElement } from 'react';

import pictures from '../../store/pictures';
import css from './index.module.css';

const Pictures = (): ReactElement => {
    // const handleClick = (): void => {
    //     pictures.getPicture()
    // }
    return (
        <div className={css.picture} onClick={pictures.getPicture} role="button" aria-hidden>
            <div className={css.loader}>
                <img src="" alt="" />
            </div>
            <img
                className={css.img}
                src="https://images.unsplash.com/photo-1614413203780-e851bb421c83?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
                alt=""
            />
        </div>
    );
};

export default Pictures;
