import {combineReducers} from "redux";
import {homeReducer} from "./home.reducer";
import {appReducer} from "./app.reducer";

export let defState = {};

export let reducers = combineReducers({
    appReducer,
    homeReducer
});
