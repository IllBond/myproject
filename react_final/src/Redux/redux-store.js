import {applyMiddleware, combineReducers, createStore} from "redux";
import {dialogReducer} from "./dialogReducer";
import {usersReducer} from "./usersReducer";
import {profileReducer} from "./ProfileReducer";
import {authReducer} from "./authReducer";
import thunkMiddleware from "redux-thunk";


let reducers = combineReducers({
    dialogs: dialogReducer,
    profile: profileReducer,
    auth: authReducer,
    users: usersReducer})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store;
export default store;