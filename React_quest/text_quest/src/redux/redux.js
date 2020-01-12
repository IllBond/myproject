import {applyMiddleware, combineReducers, createStore} from "redux";
import bagReducer from "./bagReducer";
import expReducer from "./expReducer";
import gameReducer from "./gameReducer";
import levelReducer from "./levelReducer";

let reducer = combineReducers({
    bag: bagReducer,
    exp: expReducer,
    game: gameReducer,
    level: levelReducer,
})

let store = createStore(reducer);

window.store = store;

export default store;
