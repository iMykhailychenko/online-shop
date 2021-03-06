import { observer } from 'mobx-react-lite';
import React, { ReactElement, useEffect, useState } from 'react';

import useStore from '../../hooks/store.hook';
import IPictures from '../../store/pictures/pictures.types';
import css from './index.module.css';

const Pictures = (): ReactElement => {
    const [loading, setLoading] = useState<boolean>(true);
    const pictures = useStore<IPictures>(state => state.pictures);

    const handleClick = async (): Promise<void> => {
        setLoading(true);
        await pictures.setPicture();
    };

    const loaded = (): void => {
        setLoading(false);
    };

    useEffect(() => {
        pictures.setPicture();
    }, []);

    return (
        <div className={css.picture}>
            {loading ? (
                <div className={css.loader}>
                    <img src="/spinner.gif" alt="" />
                </div>
            ) : null}

            {pictures.src ? (
                <img onClick={handleClick} aria-hidden onLoad={loaded} className={css.img} src={pictures.src} alt="" />
            ) : null}
        </div>
    );
};

export default observer(Pictures);
