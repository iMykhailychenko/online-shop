import { makeAutoObservable } from 'mobx';

import api from '../../assets/api';
import notifications from '../../components/common/Notifications';
import IPictures from './pictures.types';

export default class Pictures implements IPictures {
    public index = 0;
    public src: string | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    setPicture = async (): Promise<void> => {
        try {
            const { status, data } = await api.pictures(this.index);
            if (status < 200 || status >= 300) throw new Error();
            this.src = data;
            this.index += 1;
        } catch (error) {
            notifications.error();
        }
    };
}
