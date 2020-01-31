import {createStore,combineReducers} from 'redux';
import Reducers from './Reducers'

// Add reducers
const reducer = combineReducers({
    id:Reducers.idReducer,
    loggedIn: Reducers.loggedInReducer,
    error:Reducers.errorReducer
})

// Create store, log initial state
const store = createStore(reducer);
console.log(store.getState());

// subscribe a lambda printing state to each change
store.subscribe(() => console.log(store.getState()))

export default store;