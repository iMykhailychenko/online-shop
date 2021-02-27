import { makeAutoObservable } from 'mobx';

class Products {
    element: HTMLDivElement | null = null;
    constructor() {
        makeAutoObservable(this);
    }

    setElement(dom: HTMLDivElement) {
        this.element = dom;
    }
}

export default new Products();
