import {combineReducers, createStore} from "redux";
import contentReducer from "./ContentReducer";
import headerReducer from "./HeaderReducer";
import chartsReducer from "./ChartsReducer";


let reducers = combineReducers({
    contentPage: contentReducer,
    headerElement: headerReducer,
    chartsPage: chartsReducer,
})

let store = createStore(reducers)

window.store = store

export default store