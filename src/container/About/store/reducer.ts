import { CHANGE_LIST } from "./constants";

interface StateProps {
  name: string;
  age: number;
  list: any[];
}

const defaultState: StateProps = { name: "panpan", age: 18, list: [] };

export default (
  state = defaultState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case CHANGE_LIST:
      return { ...state, list: action.payload };
    default:
      return state;
  }
};
