import { combineReducers } from "redux";
import { quakeReducer } from "./quakeReducer"
import { searchReducer } from "./searchReducer"

export const rootReducer = combineReducers({
    quakeReducer,
    searchReducer
});