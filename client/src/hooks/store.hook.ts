import store, { IStore } from '../store/store';

const useStore = <T>(selector: (store: IStore) => T): T => {
    return selector(store);
};

export default useStore;
