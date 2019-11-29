import {actionTypes, IAction} from '../actions'

const accountReducer = (state = {}, {type, ...payload}: IAction) => {
    switch (type) {
        case actionTypes.LOGIN:
            return {...state, ...payload}
        case actionTypes.LOGOUT:
            return {...state, id: undefined, token: undefined}
        default:
            return state
    }
}
export default accountReducer