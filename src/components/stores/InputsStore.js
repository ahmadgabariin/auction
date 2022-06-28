import { observable, action, makeAutoObservable } from 'mobx'

export class InputsStore {
    constructor() {
        this.bidingInput = '';
        this.searchInput ='',

        makeAutoObservable(this, {
            searchInput:observable,
            handleInput: action
        })
    }

    handleInput = (name, value) => {
        this[name] = value
    }
}