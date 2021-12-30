import React from "react";
import { Helmet } from "react-helmet";
import { StaticRouter } from "react-router-dom";
import { renderToString } from "react-dom/server";
import Routes from "../routes";
import { renderRoutes, matchRoutes } from "react-router-config";
import StyleContext from "isomorphic-style-loader/StyleContext";
import { Provider } from "react-redux";
import { getStore } from "@src/store";

export const render = async (ctx) => {
  const branchs = matchRoutes(Routes, ctx.request.path);
  const store = getStore();
  let promises = [];
  let context = { css: [] };
  branchs.forEach((item) => {
    if (item.route.loadData) {
      promises.push(item.route.loadData(store));
    }
  });
  const css = new Set();
  const insertCss = (...styles) =>
    styles.forEach((style) => css.add(style._getCss()));

  const helmet = Helmet.renderStatic();
  await Promise.all(promises);
  const content = renderToString(
    <StyleContext.Provider value={{ insertCss }}>
      <Provider store={store}>
        <StaticRouter location={ctx.request.path}>
          <div>{renderRoutes(Routes)}</div>
        </StaticRouter>
      </Provider>
    </StyleContext.Provider>
  );
  console.log("server render!", ctx.request.path);
  const html = `
    <html>
      <head>
          ${helmet.title.toString()}
          ${helmet.meta.toString()}
          <style>${[...css].join("\n")}</style>
          <script> requestAnimationFrame(function(){ var firstPaintTime = Date.now() - performance.timing.navigationStart; console.log( 'get first paint time by raf:', firstPaintTime ); }); window.onload = function(){ requestAnimationFrame(function(){ var firstPaintTime = window.chrome.loadTimes().firstPaintTime * 1000 - window.performance.timing.navigationStart; console.log( 'get first paint time by chrome.loadTimes().firstPaintTime:', firstPaintTime ); }); }; </script>
        </head>
        <body>
        <div id="root">${content}</div>
        <script >window.context = {
          state: ${JSON.stringify(store.getState())},
        }</script>
        <script src="./index.js"></script>
        </body> 
      </html>`;
  ctx.body = html;
};
