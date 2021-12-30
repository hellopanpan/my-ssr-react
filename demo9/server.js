import Koa from "koa";
import koaStatic from "koa-static";
import React from "react";
import { StaticRouter } from "react-router-dom";
import { renderToString } from "react-dom/server";
import Routes from "./routes";
import { renderRoutes, matchRoutes } from "react-router-config";
import { Provider } from "react-redux";
import StyleContext from "isomorphic-style-loader/StyleContext";
import { getServerSore as getStore } from "./store";

const app = new Koa();
app.use(koaStatic("public"));

app.use(async (ctx) => {
  const store = getStore();
  const matchArr = matchRoutes(Routes, ctx.request.path);
  let promiseArr = [];
  matchArr.forEach((item) => {
    if (item.route.loadData) {
      promiseArr.push(item.route.loadData(store));
    }
  });
  await Promise.all(promiseArr);
  let context = { css: [] };
  const css = new Set();
  const insertCss = (...styles) =>
    styles.forEach((style) => css.add(style._getCss()));
  const content = renderToString(
    <Provider store={store}>
      <StyleContext.Provider value={{ insertCss }}>
        <StaticRouter location={ctx.request.path} context={context}>
          <div>{renderRoutes(Routes)}</div>
        </StaticRouter>
      </StyleContext.Provider>
    </Provider>
  );
  ctx.body = `
    <html>
      <head>
        <title>ssr</title>
        <style>${[...css].join("")}</style>
      </head>
      <body>
        <div id="root">${content}</div>
        <script>
         window.context = {
          state: ${JSON.stringify(store.getState())}
        }
        </script>
        <script src="./index.js"></script>
      </body>
    </html>
   `;
});
app.listen(3003, () => {
  console.log("listen:3003");
});
