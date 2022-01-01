var Koa = require("koa");
import koaStatic from "koa-static";
import React from "react";
import { renderToString } from "react-dom/server";
import Home from "./containers/Home";

const app = new Koa();
app.use(koaStatic("public"));

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
        <script src="./index.js"></script>
      </body>
    </html>
   `;
});
app.listen(3003, () => {
  console.log("listen:3003");
});
