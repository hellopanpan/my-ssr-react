import React, { useEffect } from "react";
import Header from "../components/header";
import { connect } from "react-redux";
import { action } from "./store";

const About = (props) => {
  useEffect(() => {
    props.getList();
  }, []);
  return (
    <div>
      <Header></Header>
      <h2 onClick={() => alert("about")}>This is about</h2>
      <p>about is the page ..... more discribe</p>
      <h3>List Content</h3>
      <p>name: {props.name}</p>
      <p>age: {props.age}</p>
      <h4>List: </h4>
      {props.list.map((item, index) => {
        return (
          <p key={index}>
            {item.id} --- {item.title}
          </p>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  name: state.about.name,
  age: state.about.age,
  list: state.about.list,
});
const mapDispatchToProps = (dispatch) => ({
  getList() {
    dispatch(action.getHomeList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(About);
