import React, { useEffect } from "react";
import Header from "@components/Header";
import { connect } from "react-redux";
import { action } from "./store";
const About = (props) => {
  useEffect(() => {
    props.getList();
  }, []);
  return (
    <div>
      <Header></Header>
      <div>About {props.name}</div>
      <div>
        {props.list.map((item, index) => {
          return (
            <div key={index}>
              <span>{item}</span>
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
};

About.loadData = (store) => {
  return store.dispatch(action.getHomeList(true));
};
const mapStateToProps = (state) => ({
  name: state.about.name,
  list: state.about.list,
});
const mapDispatchToProps = (dispatch) => ({
  getList() {
    dispatch(action.getHomeList());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(About);
