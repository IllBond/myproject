import {combineReducers, createStore} from "redux";
import {dialogReducer} from "./dialogReducer";
import {usersReducer} from "./usersReducer";


let reducers = combineReducers({
    dialogs: dialogReducer,
    users: usersReducer,
})
let store = createStore(reducers)

window.store = store;
export default store;