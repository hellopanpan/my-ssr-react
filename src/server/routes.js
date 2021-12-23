import Router from "koa-router";
var proxy = require("koa-proxy");
const router = new Router();

router.prefix("/api");

router.get(
  "(.*)",
  proxy({
    host: "http://localhost:3008",
    map: function (path) {
      console.log(path);
      return path.replace(/\/api/, "");
    },
  })
);

export default router;
