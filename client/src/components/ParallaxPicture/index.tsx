import { faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons/faExpandArrowsAlt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement } from 'react';

import css from './index.module.css';

interface IProps {
    src: string;
    alt?: string;
    images?: string[];
}

const ParallaxPicture = ({ src, alt, images }: IProps): ReactElement => {
    return (
        <div className={css.wrp}>
            <div className={css.inner}>
                <button className={css.btn} type="button">
                    <FontAwesomeIcon icon={faExpandArrowsAlt} />
                </button>
                <img className={css.img} src={src} alt={alt || ''} />
            </div>
        </div>
    );
};

export default ParallaxPicture;
