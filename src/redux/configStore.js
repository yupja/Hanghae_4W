import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import main from "./modules/main";

const middlewares = [thunk];

const enhancer = applyMiddleware(...middlewares);

const rootReducer = combineReducers({ main });

const store = createStore(rootReducer, enhancer);

export default store;
