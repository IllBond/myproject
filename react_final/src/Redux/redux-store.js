import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {dialogReducer} from "./dialogReducer";
import {usersReducer} from "./usersReducer";
import profileReducer from "./ProfileReducer";
import {authReducer} from "./authReducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import {initialaizedReducer} from "./appReducer";


let reducers = combineReducers({
    dialogs: dialogReducer,
    profile: profileReducer,
    auth: authReducer,
    form: formReducer,
    initial: initialaizedReducer,
    users: usersReducer});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))



window.store = store;
export default store;