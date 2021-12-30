var Koa = require("koa");
import koaStatic from "koa-static";
import router from "./routes";
import { render } from "./utils";
//实例化
var app = new Koa();
app.use(router.routes());
app.use(router.allowedMethods());

app.use(koaStatic("public"));

//中间件
app.use(render);
//监听

app.listen(8008, () => {
  console.log("listen on 8008 port!");
});
