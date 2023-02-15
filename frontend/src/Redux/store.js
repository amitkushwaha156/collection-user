import {legacy_createStore,applyMiddleware,combineReducers} from "redux"
import thunk from 'redux-thunk';
import TodoReducer from "./TodoRedux/Reduce"

const CombineD=combineReducers({
    TodoReducer
})

const store = legacy_createStore(CombineD,applyMiddleware(thunk));
export {store}