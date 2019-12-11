import {applyMiddleware, combineReducers, createStore} from "redux";

import thunkMiddleware from "redux-thunk";
import commonReducer from "./commonReduxer";


let reducers = combineReducers({
    commonReducer: commonReducer,
});

const store = createStore(reducers,  applyMiddleware(thunkMiddleware));

window.__store__ = store;

export default store;