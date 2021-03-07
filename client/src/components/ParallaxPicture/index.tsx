import { faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons/faExpandArrowsAlt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { MouseEvent, ReactElement, useRef } from 'react';

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

    return (
        <div className={css.wrp} onMouseMove={startRotate} onMouseOut={stopRotate} onBlur={stopRotate}>
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
