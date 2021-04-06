import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { MouseEvent, ReactElement, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import css from './index.module.css';

interface IProps {
    open: boolean;
    width?: number;
    onToggle: (value: boolean) => void;
    children: ReactElement | ReactElement[];
}
const Root = ({ children, open, onToggle }: IProps) => {
    const handleToggle = (event: MouseEvent<HTMLDivElement>): void => {
        if (event.target === event.currentTarget) onToggle(!open);
    };

    useEffect(() => {
        const close = (event: KeyboardEvent): void => {
            event.preventDefault();
            if (event.key === 'Escape') onToggle(false);
        };

        // style
        document.body.style.top = `-${window.scrollY}px`;
        document.body.style.position = 'fixed';
        // event
        window.addEventListener('keydown', close);

        return () => {
            // style
            const top = document.body.style.top;
            document.body.style.position = '';
            document.body.style.top = '';
            window.scrollTo({ top: parseInt(top || '0') * -1 });
            // event
            window.removeEventListener('keydown', close);
        };
    }, []);

    return (
        <div className={css.backdrop} onClick={handleToggle} aria-hidden role="button">
            {children}
        </div>
    );
};

const Drawer = ({ children, width = 40, open, onToggle }: IProps): ReactElement | null => {
    const handleToggle = (): void => {
        onToggle(!open);
    };

    return (
        <CSSTransition timeout={200} unmountOnExit in={open}>
            <Root onToggle={onToggle} open={open}>
                <div className="inner" style={{ maxWidth: `${width}rem`, minWidth: `${width - 10}rem` }}>
                    <button type="button" className={css.button} onClick={handleToggle}>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                    {children}
                </div>
            </Root>
        </CSSTransition>
    );
};

export default Drawer;
