import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import { RootReducer } from "./services/reducer/RootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(RootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store