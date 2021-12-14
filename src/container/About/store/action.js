import { CHANGE_LIST } from "./constants";

const changeAction = (payload) => ({
  type: CHANGE_LIST,
  payload,
});

const getHomeList = () => {
  return (dispatch, getState, axiosInstance) => {
    const store = getState();
    console.log("store:" + store);
    return axiosInstance.get("/mock/1").then((res) => {
      dispatch(changeAction([1, 2, 3, 4, 5]));
    });
  };
};

export default {
  getHomeList,
};
