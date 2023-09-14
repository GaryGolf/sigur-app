import { makeAutoObservable, observable } from "mobx";

export interface PersonalStore {
    data: any;
    isLoading: boolean;
}

export class Store {
    
    personal: PersonalStore = {
        data: {},
        isLoading: false
    }

    constructor() {
        makeAutoObservable(this, {
            personal: observable
        })
    }

}
