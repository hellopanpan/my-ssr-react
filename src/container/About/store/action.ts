import { Dispatch } from "redux";
import { AxiosInstance } from "axios";
import { CHANGE_LIST } from "./constants";

const changeAction = (payload: any) => ({
  type: CHANGE_LIST,
  payload,
});

const getHomeList = () => {
  return (
    dispatch: Dispatch<{ type: string; payload: any }>,
    getState: any,
    axiosInstance: AxiosInstance
  ) => {
    const store = getState();
    return axiosInstance.get("/mock/1").then((res) => {
      dispatch(changeAction([1, 2, 3, 4, 5]));
    });
  };
};

export default {
  getHomeList,
};
