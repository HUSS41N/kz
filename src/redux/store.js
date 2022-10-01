import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import queryReducer from "./reducers"

const rootReducer = combineReducers({queryReducer})

const Store = createStore(rootReducer,applyMiddleware(thunk))

export default Store