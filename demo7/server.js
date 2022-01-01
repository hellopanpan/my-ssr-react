import Koa from "koa";
import koaStatic from "koa-static";
import React from "react";
import { StaticRouter } from "react-router-dom";
import { renderToString } from "react-dom/server";
import Routes from "./routes";
import { renderRoutes, matchRoutes } from "react-router-config";
import { Provider } from "react-redux";
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
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={ctx.request.path}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );
  ctx.body = `
    <html>
      <head>
        <title>ssr</title>
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
app.listen(3007, () => {
  console.log("listen:3007");
});
