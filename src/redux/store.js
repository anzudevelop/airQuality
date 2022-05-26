import {applyMiddleware, combineReducers, createStore} from "redux";
import contentReducer from "./ContentReducer";
import headerReducer from "./HeaderReducer";
import chartsReducer from "./ChartsReducer";
import thunkMiddleware from 'redux-thunk'


let reducers = combineReducers({
    contentPage: contentReducer,
    headerElement: headerReducer,
    chartsPage: chartsReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store