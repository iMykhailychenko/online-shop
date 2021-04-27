import { faEye } from '@fortawesome/free-regular-svg-icons/faEye';
import { faEyeSlash } from '@fortawesome/free-regular-svg-icons/faEyeSlash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React, { ChangeEvent, FormEvent, ReactElement, useState } from 'react';

import { modal } from '../../Modal';
import css from '../index.module.css';

interface Value {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

interface Error {
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
}

const init: Value = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
};

const Join = (): ReactElement => {
    const [type, setType] = useState('password');

    const [error, setError] = useState<Error>(init);
    const [input, setInput] = useState<Value>(init);

    const handleType = (): void => {
        setType(value => (value === 'password' ? 'text' : 'password'));
    };

    const change = (event: ChangeEvent<HTMLInputElement>): void => {
        setInput({ ...input, [event.target.name]: event.target.value });
        setError({});
    };

    const submit = (event: FormEvent): void => {
        event.preventDefault();

        if (!input.firstName.trim()) {
            setError({ firstName: 'Required field' });
            return;
        }

        if (!input.lastName.trim()) {
            setError({ lastName: 'Required field' });
            return;
        }

        if (!input.email.trim()) {
            setError({ email: 'Required field' });
            return;
        }

        if (!input.password.trim()) {
            setError({ password: 'Required field' });
            return;
        }

        console.log('assasas');
    };

    return (
        <form action="#" method="post" onSubmit={submit}>
            <h2>Join form</h2>

            <label className={css.label}>
                <p>First name</p>
                <input
                    value={input.firstName}
                    onChange={change}
                    className={clsx(css.input, error.firstName && css.error)}
                    type="text"
                    name="firstName"
                    placeholder="..."
                />
                {error.firstName && <small className={css.red}>{error.firstName}</small>}
            </label>

            <label className={css.label}>
                <p>Last name</p>
                <input
                    value={input.lastName}
                    onChange={change}
                    className={clsx(css.input, error.lastName && css.error)}
                    type="text"
                    name="lastName"
                    placeholder="..."
                />
                {error.lastName && <small className={css.red}>{error.lastName}</small>}
            </label>

            <label className={css.label}>
                <p>Email</p>
                <input
                    value={input.email}
                    onChange={change}
                    className={clsx(css.input, error.email && css.error)}
                    type="email"
                    name="email"
                    placeholder="example@email.com"
                />
                {error.email && <small className={css.red}>{error.email}</small>}
            </label>

            <label className={css.label}>
                <p>Password</p>
                <div className={css.wrp}>
                    <input
                        value={input.password}
                        onChange={change}
                        className={clsx(css.input, error.password && css.error)}
                        type={type}
                        name="password"
                        placeholder="****"
                    />
                    <button onClick={handleType} className={css.eye} type="button">
                        {type === 'password' ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
                    </button>
                </div>
                {error.password && <small className={css.red}>{error.password}</small>}
            </label>

            <div className={css.flex}>
                <button type="button" onClick={modal.close} className={clsx(css.btn, css.cancel)}>
                    cancel
                </button>
                <button type="submit" className={clsx(css.btn, css.login)}>
                    join
                </button>
            </div>
        </form>
    );
};

export default Join;
