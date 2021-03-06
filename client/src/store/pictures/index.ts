import { makeAutoObservable } from 'mobx';

import api from '../../assets/api';
import IPictures from './pictures.types';

class Index implements IPictures {
    public index = 58;
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
            console.dir(error);
        }
    };
}

export default new Index();
