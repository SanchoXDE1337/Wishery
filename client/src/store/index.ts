import {loadState, saveState} from '../utils/localStore'
import {createStore} from 'redux'
import rootReducer from './reducers'

const initialState = loadState()

const store = createStore(
    rootReducer,
    initialState,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
)

store.subscribe(() => {
    saveState({
        accountStore: store.getState().accountStore,
    })
})

export default store
