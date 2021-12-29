import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { reducer as AboutReducer } from "../containers/store";

const reducer = combineReducers({
  about: AboutReducer,
});

export const getClientStore = () => {
  const defaultState = window.context ? window.context.state : {};
  return createStore(reducer, defaultState, applyMiddleware(thunk));
};

export const getServerSore = () => {
  return createStore(reducer, applyMiddleware(thunk));
};
