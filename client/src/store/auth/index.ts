import { makeAutoObservable } from 'mobx';

import api from '../../assets/api';
import notifications from '../../components/common/Notifications';

export interface LoginBody {
    email: string;
    password: string;
}

export interface LoginResponse {
    token: string;
}

export interface IAuth {
    token: string | null;
    login: (body: LoginBody) => Promise<void>;
}

export class Auth implements IAuth {
    token: string | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    login = async (body: LoginBody): Promise<void> => {
        try {
            const { status, data } = await api.auth.login(body);
            if (status < 200 || status >= 300) throw new Error();
            this.token = data.token;
        } catch (error) {
            notifications.error();
        }
    };
}
