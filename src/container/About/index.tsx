import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "@components/Header";
import { connect } from "react-redux";
import { action } from "./store";

interface AboutProps {
  getList: Function;
  name: string;
  list: any[];
  staticContext?: any;
}
const About: React.FC<AboutProps> = (props) => {
  useEffect(() => {
    props.getList();
  }, []);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Panpan about page</title>
        <meta name="description" content="this is panpan about page" />
      </Helmet>
      <Header staticContext={props.staticContext}></Header>
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

(About as any).loadData = (store: any) => {
  return store.dispatch(action.getHomeList());
};
const mapStateToProps = (state: any) => ({
  name: state.about.name,
  list: state.about.list,
});
const mapDispatchToProps = (dispatch: any) => ({
  getList() {
    dispatch(action.getHomeList());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(About);
