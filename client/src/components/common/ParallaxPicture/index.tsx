import { faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons/faExpandArrowsAlt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { observer } from 'mobx-react-lite';
import React, { MouseEvent, ReactElement, useRef } from 'react';

import useStore from '../../../hooks/store.hook';
import IProducts from '../../../store/products/products.types';
import { modal } from '../Modal';
import BigModal from '../Modal/Wrp/BigModal';
import ProductModal from '../ProductModal';
import css from './index.module.css';

interface IProps {
    id: number;
    src: string;
    alt?: string;
    images?: string[];
}

const ParallaxPicture = ({ id, src, alt }: IProps): ReactElement => {
    const ref = useRef<HTMLDivElement>(null);
    const products = useStore<IProducts>(state => state.products);

    const startRotate = (event: MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const height = ref.current?.offsetHeight / 2;
        const width = ref.current?.offsetWidth / 2;
        ref.current.style.transform = `rotateX(${(event.nativeEvent.offsetY - height) / 20}deg) rotateY(${
            -(event.nativeEvent.offsetX - width) / 20
        }deg)`;
    };

    const stopRotate = (): void => {
        if (ref.current) ref.current.style.transform = 'rotateX(0)';
    };

    const handleModal = (): void => {
        products.findById(id);
        modal.open(
            <BigModal>
                <ProductModal />
            </BigModal>,
        );
    };

    return (
        <div
            className={css.wrp}
            onClick={handleModal}
            onMouseMove={startRotate}
            onMouseOut={stopRotate}
            onBlur={stopRotate}
            aria-hidden
        >
            <div ref={ref} className={css.parallax}>
                <div className={css.inner}>
                    <button className={css.btn} type="button">
                        <FontAwesomeIcon icon={faExpandArrowsAlt} />
                    </button>
                    <img className={css.img} src={src || '/no_photo.svg'} alt={alt || ''} />
                </div>
            </div>
        </div>
    );
};

export default observer(ParallaxPicture);
