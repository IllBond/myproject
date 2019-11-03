import {applyMiddleware, combineReducers, createStore} from "redux";
import {reducer as formReducer} from 'redux-form'

import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import usersReducer from "./UsersReducer";
import AuthReducer from "./AuthReducer";
import thunkMiddleware from 'redux-thunk'
import appReducer from "./AppReducer";




let reducer = combineReducers({
    dialogReducer: dialogReducer,
    profileReducer: profileReducer,
    AuthReducer: AuthReducer,
    usersReducer: usersReducer,
    form: formReducer,
    app: appReducer
})

let store = createStore(reducer, applyMiddleware(thunkMiddleware));

window.store = store

export default store;
