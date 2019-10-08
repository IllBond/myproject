import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import usersReducer from "./UsersReducer";
import AuthReducer from "./AuthReducer";


let reducer = combineReducers({
    dialogReducer: dialogReducer,
    profileReducer: profileReducer,
    AuthReducer: AuthReducer,
    usersReducer: usersReducer
})

let store = createStore(reducer);
window.store = store

export default store;
