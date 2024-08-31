import { applyMiddleware, legacy_createStore } from "redux";
import { reducer as userReducer } from "./userReducer/reducer";
import { thunk } from "redux-thunk";

export const store = legacy_createStore(userReducer, applyMiddleware(thunk));
