import store from '../store/store';
import IStore from '../store/store.types';

const useStore = <T>(selector: (store: IStore) => T): T => {
    return selector(store);
};

export default useStore;
