import { makeAutoObservable } from 'mobx';

import { IUploads } from './uploads.types';

class Uploads implements IUploads {
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

    submit = (): void => {
        alert('submit');
    };
}

export default new Uploads();
