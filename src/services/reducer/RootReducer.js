import { combineReducers } from "redux";
import { CrudReducer } from "./CrudReducer";

export const RootReducer = combineReducers({
    CrudReducer,
})