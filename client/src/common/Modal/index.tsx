import { EventEmitter } from 'events';
import React, { Component, MouseEvent, ReactElement } from 'react';

import css from './index.module.css';

type Element = JSX.Element[] | JSX.Element | null;

class ModalManagement extends EventEmitter {
    public dom: Element;
    public scrollY = 0;

    constructor() {
        super();
        this.dom = null;

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }

    open(dom: Element): void {
        this.dom = dom;

        // styles
        this.scrollY = window.scrollY;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${this.scrollY}px`;
        document.body.style.paddingRight = '10px';

        // emit
        this.emitChange();
    }

    close(): void {
        this.dom = null;

        // styles
        document.body.style.position = '';
        document.body.style.top = '0';
        document.body.style.paddingRight = '';
        window.scrollTo({ top: this.scrollY });
        // emit
        this.emitChange();
    }

    emitChange(): void {
        this.emit('modal', this.dom);
    }
}

export const modal = new ModalManagement();

interface IState {
    dom: Element;
}

export default class ModalComponent extends Component<unknown, IState> {
    state = {
        dom: null,
    };

    componentDidMount(): void {
        modal.addListener('modal', this.handleModal);
        window.addEventListener('keydown', this.handleKeyClose);
    }

    componentWillUnmount(): void {
        modal.removeListener('modal', this.handleModal);
        window.removeEventListener('keydown', this.handleKeyClose);
    }

    handleModal = (dom: Element): void => {
        this.setState({ dom });
    };

    handleKeyClose = (event: KeyboardEvent): void => {
        if (event.code !== 'Escape') return;
        modal.close();
    };

    handleClickClose = (event: MouseEvent<HTMLDivElement>): void => {
        if (event.target !== event.currentTarget) return;
        modal.close();
    };

    render(): ReactElement | boolean {
        const { dom } = this.state;
        return (
            !!dom && (
                <div className={css.backdrop} onClick={this.handleClickClose} aria-hidden>
                    <div className={css.scroll} onClick={this.handleClickClose} aria-hidden>
                        {dom}
                    </div>
                </div>
            )
        );
    }
}
