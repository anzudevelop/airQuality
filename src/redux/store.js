import {combineReducers, createStore} from "redux";
import contentReducer from "./ContentReducer";
import headerReducer from "./HeaderReducer";


let reducers = combineReducers({
    contentPage: contentReducer,
    headerElement: headerReducer,
})

let store = createStore(reducers)

window.store = store

export default store