var Koa = require("koa");
var Router = require("koa-router");
const cors = require("koa2-cors");

var app = new Koa();
var router = new Router();

app.use(
  cors({
    origin: function (ctx) {
      if (ctx.url === "/test") {
        return "*";
      }
      return "http://localhost:3003";
    },
    maxAge: 5,
    credentials: true,
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization", "Accept"],
    exposeHeaders: ["WWW-Authenticate", "Server-Authorization"],
  })
);

router.get("/mock/1", async (ctx) => {
  ctx.status = 200;
  ctx.body = `{
    "data": [
      {
        "id": 1,
        "title": "1111111"
      },
      {
        "id": 2,
        "title": "2222222"
      },
      {
        "id": 3,
        "title": "3333333"
      },
      {
        "id": 4,
        "title": "4444444"
      },
      {
        "id": 5,
        "title": "5555555"
      }
    ]
  }`;
});
app.use(router.routes()).use(router.allowedMethods());

var server = app.listen(3008, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("应用实例，访问地址为 http://%s:%s", host, port);
});
