import { CHANGE_LIST } from "./constants";

const defaultState = { name: "panpan", age: 18, list: [] };

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_LIST:
      return { ...state, list: action.payload };
    default:
      return state;
  }
};
