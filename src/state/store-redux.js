import {combineReducers, createStore} from "redux";
import {weatherReducer} from "../redusers/weatherReducer";
import {dialogsReducer} from "../redusers/dialogsReducer";
let reducers = combineReducers({weatherReducer: weatherReducer, dialogsReducer: dialogsReducer})
export const store = createStore(reducers)
