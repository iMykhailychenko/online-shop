import { faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons/faExpandArrowsAlt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { MouseEvent, ReactElement, useRef } from 'react';

import { modal } from '../Modal';
import BigModal from '../Modal/Wrp/BigModal';
import css from './index.module.css';

interface IProps {
    src: string;
    alt?: string;
    images?: string[];
}

const ParallaxPicture = ({ src, alt }: IProps): ReactElement => {
    const ref = useRef<HTMLDivElement>(null);

    const startRotate = (event: MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const height = ref.current?.offsetHeight / 2;
        const width = ref.current?.offsetWidth / 2;
        ref.current.style.transform = `rotateX(${-(event.nativeEvent.offsetY - height) / 15}deg) rotateY(${
            (event.nativeEvent.offsetX - width) / 15
        }deg)`;
    };

    const stopRotate = (): void => {
        if (ref.current) ref.current.style.transform = 'rotateX(0)';
    };

    const handleModal = (): void => {
        modal.open(
            <BigModal>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, animi beatae deleniti eveniet
                exercitationem harum id illo molestias mollitia neque perferendis quas saepe voluptatem? Atque
                distinctio esse quas quis tenetur?
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
                    <img className={css.img} src={src} alt={alt || ''} />
                </div>
            </div>
        </div>
    );
};

export default ParallaxPicture;
