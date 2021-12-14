import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { reducer as AboutReducer } from "@container/About/store";
import { instance as instanceServer } from "../server/request";
import { instance as instanceClient } from "../client/request";

const reducer = combineReducers({
  about: AboutReducer,
});
export const getStore = () =>
  createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument(instanceServer))
  );
export const getClientStore = () => {
  const defaultStore = window.context.state;
  return createStore(
    reducer,
    defaultStore,
    applyMiddleware(thunk.withExtraArgument(instanceClient))
  );
};
