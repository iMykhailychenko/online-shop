import { makeAutoObservable } from 'mobx';

import api from '../../assets/api';

export interface IUploads {
    files: File[];
    push: (file: File) => void;
    delete: (name: string) => void;
    submit: () => Promise<string[] | null>;
    reset: () => void;
}

export class Uploads implements IUploads {
    public files: File[] = [];
    constructor() {
        makeAutoObservable(this);
    }

    push = (file: File): void => {
        if (!this.files.find(item => item.name === file.name)) this.files.push(file);
    };

    delete = (name: string): void => {
        this.files = this.files.filter(file => file.name !== name);
    };

    submit = async (): Promise<string[] | null> => {
        if (!this.files.length) return ['/no_photo.svg'];
        try {
            const form = new FormData();
            this.files.forEach(file => {
                form.append('files', file);
            });
            const { status, data } = await api.uploads(form);
            if (status < 200 || status >= 300) throw new Error();
            return data;
        } catch (error) {
            return null;
        }
    };

    reset = (): void => {
        this.files = [];
    };
}
