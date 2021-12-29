import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import Routes from "./routes";
import { Provider } from "react-redux";
import { getClientStore as getStore } from "./store";

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
