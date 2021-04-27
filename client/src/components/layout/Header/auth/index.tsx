import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement } from 'react';

import Join from '../../../common/Auth/Join';
import Login from '../../../common/Auth/Login';
import { modal } from '../../../common/Modal';
import SmallModal from '../../../common/Modal/Wrp/SmallModal';
import css from '../index.module.css';

const AuthHeader = (): ReactElement => {
    const joinModal = (): void => {
        modal.open(
            <SmallModal>
                <Join />
            </SmallModal>,
        );
    };
    const loginModal = (): void => {
        modal.open(
            <SmallModal>
                <Login />
            </SmallModal>,
        );
    };

    return (
        <>
            <FontAwesomeIcon icon={faUser} />
            <button className={css.link} onClick={joinModal} type="button">
                join
            </button>
            <button className={css.link} onClick={loginModal} type="button">
                login
            </button>
            <span className={css.line} />
        </>
    );
};

export default AuthHeader;
