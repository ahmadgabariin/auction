import { observable, action, makeAutoObservable } from 'mobx'

export class InputsStore {
    constructor() {
        this.bidingInput = '';
        this.searchInput ='',
        this.itemTitle = '',
        this.category='',


        makeAutoObservable(this, {
            searchInput:observable,
            handleInput: action
        })
    }

    handleInput = (name, value) => {
        this[name] = value
    }
}