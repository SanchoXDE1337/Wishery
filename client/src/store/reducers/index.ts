import {combineReducers} from 'redux'
import accountStore from './accountReducer'

export interface IAccountStore {
    token?: string
    id?: string
}

export interface IStore {
    accountStore: IAccountStore
}

export default combineReducers({accountStore})
