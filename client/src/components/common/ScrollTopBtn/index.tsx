import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import pop from '../../../styles/transitions/pop.module.css';
import css from './index.module.css';

const ScrollTop = (): ReactElement => {
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const [top, setTop] = useState(false);

    useEffect(() => {
        const handleScroll = (): void => {
            setTop(window.scrollY >= 150);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClick = (): void => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <CSSTransition in={top} timeout={600} classNames={pop} unmountOnExit>
            <button className={css.btn} ref={buttonRef} onClick={handleClick} type="button" />
        </CSSTransition>
    );
};

export default ScrollTop;
