//  demo1
var Koa = require("koa");
var app = new Koa();

app.use(async (ctx) => {
  ctx.body = `
    <html>
      <head>
         <title>ssr</title>
        </head>
        <body>
        <div id="root">
            <h1>hello server</h1>
            <p>word</p>
        </div>
      </body> 
      </html>`;
});

//监听
app.listen(3001, () => {
  console.log("listen on 3001 port!");
});
