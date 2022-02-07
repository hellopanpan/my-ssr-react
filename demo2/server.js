//  server.js
import Koa from "koa";
import React from "react";
import { renderToString } from "react-dom/server";
import Home from "./containers/Home";

const app = new Koa();

app.use(async (ctx) => {
  const content = renderToString(<Home />);
  console.log(content);
  ctx.body = `
    <html>
      <head>
        <title>ssr</title>
      </head>
      <body>
        <div id="root">${content}</div>
      </body>
    </html>
   `;
});
app.listen(3002, () => {
  console.log("listen:3002");
});
