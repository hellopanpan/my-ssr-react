import Koa from "koa";
import koaStatic from "koa-static";
import React from "react";
import { StaticRouter } from "react-router-dom";
import { renderToString } from "react-dom/server";
import Routes from "./routes";
import { renderRoutes } from "react-router-config";

const app = new Koa();
app.use(koaStatic("public"));

app.use(async (ctx) => {
  console.log("-render--");
  const content = renderToString(
    <StaticRouter location={ctx.request.path}>
      <div>{renderRoutes(Routes)}</div>
    </StaticRouter>
  );
  ctx.body = `
    <html>
      <head>
        <title>ssr</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="./index.js"></script>
      </body>
    </html>
   `;
});
app.listen(3004, () => {
  console.log("listen:3004");
});
