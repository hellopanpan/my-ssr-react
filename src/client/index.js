import React from "react";
import ReactDom from "react-dom";
// import Home from "../container/Home";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";
import Routes from "../routes";
import { getClientStore as getStore } from "@src/store";
import StyleContext from "isomorphic-style-loader/StyleContext";

const App = () => {
  const insertCss = () => {};
  return (
    <StyleContext.Provider value={{ insertCss }}>
      <Provider store={getStore()}>
        <BrowserRouter>
          <div>{renderRoutes(Routes)}</div>
        </BrowserRouter>
      </Provider>
    </StyleContext.Provider>
  );
};
ReactDom.hydrate(<App />, document.getElementById("root"));
