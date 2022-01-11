import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as AboutReducer } from "../containers/store";

const reducer = combineReducers({
  about: AboutReducer,
});

export default () => {
  return createStore(reducer, applyMiddleware(thunk));
};
