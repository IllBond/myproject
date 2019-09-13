import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import usersReducer from "./UsersReducer";


let reducer = combineReducers({
    dialogReducer: dialogReducer,
    profileReducer: profileReducer,
    usersReducer: usersReducer
})

let store = createStore(reducer);
window.store = store

export default store;
