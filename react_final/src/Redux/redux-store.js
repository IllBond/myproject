import {combineReducers, createStore} from "redux";
import {dialogReducer} from "./dialogReducer";
import {usersReducer} from "./usersReducer";
import {profileReducer} from "./ProfileReducer";


let reducers = combineReducers({
    dialogs: dialogReducer,
    profile: profileReducer,
    users: usersReducer})
let store = createStore(reducers)

window.store = store;
export default store;