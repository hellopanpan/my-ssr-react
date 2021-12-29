var Koa = require("koa");
import React from "react";
import { renderToString } from "react-dom/server";
import Home from "./containers/Home";

const app = new Koa();
const content = renderToString(<Home />);
app.use(async (ctx) => {
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
app.listen(3003, () => {
  console.log("listen:3003");
});
