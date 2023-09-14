import { createContext, useContext } from 'react';
import { Store } from './model';

const StoreContext = createContext<Store>({} as Store);
function useStore<T>(selector?: (store: Store) => T): Store | T {
    const store = useContext(StoreContext);
    return !selector ? store : selector(store);
}
export { Store, StoreContext, useStore } ;