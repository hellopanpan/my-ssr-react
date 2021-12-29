import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { reducer as AboutReducer } from "../containers/store";

const reducer = combineReducers({
  about: AboutReducer,
});

export default () => {
  return createStore(reducer, applyMiddleware(thunk));
};
