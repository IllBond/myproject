import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";


let reducer = combineReducers({
    dialogReducer: dialogReducer,
    profileReducer: profileReducer
})

let store = createStore(reducer);
window.store = store

export default store;
