import axios from "axios";
import { CHANGE_LIST } from "./constants";

const changeAction = (payload) => ({
  type: CHANGE_LIST,
  payload,
});

const getHomeList = () => {
  return (dispatch) => {
    return axios.get("http://localhost:3008/mock/1").then((res) => {
      dispatch(changeAction(res.data.data || []));
    });
  };
};

export default {
  getHomeList,
};
