import { faEye } from '@fortawesome/free-regular-svg-icons/faEye';
import { faEyeSlash } from '@fortawesome/free-regular-svg-icons/faEyeSlash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { observer } from 'mobx-react-lite';
import React, { ChangeEvent, FormEvent, ReactElement, useState } from 'react';

import useStore from '../../../../hooks/store.hook';
import { Auth } from '../../../../store/auth';
import Input from '../../Input/input';
import { modal } from '../../Modal';
import css from '../index.module.css';

interface Value {
    email: string;
    password: string;
}

interface Error {
    email?: string;
    password?: string;
}

const init: Value = {
    email: '',
    password: '',
};

const Login = (): ReactElement => {
    const auth = useStore<Auth>(state => state.auth);
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

    const submit = async (event: FormEvent): Promise<void> => {
        event.preventDefault();

        if (!input.email.trim()) {
            setError({ email: 'Required field' });
            return;
        }

        if (!input.password.trim()) {
            setError({ password: 'Required field' });
            return;
        }

        await auth.login(input);
    };

    return (
        <form action="#" method="post" onSubmit={submit}>
            <h2>Login form</h2>

            <div className={css.label}>
                <p>Email</p>
                <Input
                    error={error.email}
                    value={input.email}
                    onChange={change}
                    className={clsx(css.input, error.email && css.error)}
                    type="email"
                    name="email"
                    placeholder="example@email.com"
                />
            </div>

            <div className={css.label}>
                <p>Password</p>
                <div className={css.wrp}>
                    <Input
                        error={error.password}
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
            </div>

            <div className={css.flex}>
                <button type="button" onClick={modal.close} className={clsx(css.btn, css.cancel)}>
                    cancel
                </button>
                <button type="submit" className={clsx(css.btn, css.login)}>
                    login
                </button>
            </div>
        </form>
    );
};

export default observer(Login);
