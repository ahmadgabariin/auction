import { observable, action, makeAutoObservable } from 'mobx'

export class InputsStore {
    constructor() {
        this.bidingInput = ''
        this.searchInput =''
        this.itemTitle = ''
        this.category=''
        this.description=''
        this.price=''
        this.myImage=""


        makeAutoObservable(this, {
            searchInput:observable,
            category:observable,
            bidingInput:observable,
            itemTitle:observable,
            description:observable,
            price:observable,
            myImage:observable,
            handleInput: action
        })
    }

    handleInput = (name, value) => {
        this[name] = value
    }
}