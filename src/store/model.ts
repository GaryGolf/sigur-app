import { action, makeAutoObservable, observable } from "mobx";

export interface PersonalStore {
    data: any;
    isLoading: boolean;
}

export class Store {
    counter: number = 0;
    
    personal: PersonalStore = {
        data: {},
        isLoading: false
    }

    constructor() {
        this.increment = this.increment.bind(this);
        return makeAutoObservable(this, {
            counter: observable,
            increment: action,
            personal: observable,
        })
    }

    increment(): void { 
        this.counter++; 
    }

}
