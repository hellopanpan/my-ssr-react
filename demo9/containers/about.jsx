import React, { useEffect } from "react";
import Header from "../components/header";
import { connect } from "react-redux";
import { action } from "./store";
import useStyles from "isomorphic-style-loader/useStyles";
import styles from "./about.css";

const About = (props) => {
  useStyles(styles);
  return (
    <div>
      <Header staticContext={props.staticContext}></Header>
      <h2 onClick={() => alert("about")}>This is about</h2>
      <p>about is the page ..... more discribe</p>
      <h3 className={styles.title}>List Content</h3>
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
About.loadData = (store) => {
  return Promise.all([store.dispatch(action.getHomeList())]);
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
