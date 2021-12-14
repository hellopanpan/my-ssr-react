import React from "react";
import ReactDom from "react-dom";
// import Home from "../container/Home";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";
import Routes from "../routes";
import { getClientStore as getStore } from "@src/store";

const App = () => {
  return (
    <Provider store={getStore()}>
      <BrowserRouter>
        <div>{renderRoutes(Routes)}</div>
      </BrowserRouter>
    </Provider>
  );
};
ReactDom.hydrate(<App />, document.getElementById("root"));
