import { action, makeAutoObservable, observable } from "mobx";

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
        return makeAutoObservable(this, {
            personal: observable,
        })
    }

}
