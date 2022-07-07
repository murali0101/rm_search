import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { homePageReducer } from "../homePage/reducer";

const rootReducer = combineReducers({
  homePage: homePageReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
