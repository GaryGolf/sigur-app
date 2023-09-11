import {createContext, useContext} from "react";
import { Store } from "./model";
const StoreContext = createContext<Store>({} as Store);
const useStore = (selector?: (store: Store) => any): Store => {
    const store = useContext(StoreContext) ;
    return !selector ? store : selector(store);
}
export { Store, StoreContext, useStore } ;