import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "@components/Header";
import { connect } from "react-redux";
import { action } from "./store";
import useStyles from "isomorphic-style-loader/useStyles";
import styles from "./about.css";

interface AboutProps {
  getList: Function;
  name: string;
  age: string;
  list: any[];
}
const About: React.FC<AboutProps> = (props) => {
  useStyles(styles);
  useEffect(() => {
    if (!props.list.length) props.getList();
  }, []);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>SSR About Page</title>
        <meta name="description" content="this is panpan about page" />
      </Helmet>
      <div>
        <Header></Header>
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
    </div>
  );
};

(About as any).loadData = (store: any) => {
  return store.dispatch(action.getHomeList());
};
const mapStateToProps = (state: any) => ({
  name: state.about.name,
  age: state.about.age,
  list: state.about.list,
});
const mapDispatchToProps = (dispatch: any) => ({
  getList() {
    dispatch(action.getHomeList());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(About);
