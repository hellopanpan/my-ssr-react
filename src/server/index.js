var express = require("express");
var proxy = require("express-http-proxy");
import { render } from "./utils";

// import Home from "../container/Home";
var app = express();
app.use(express.static("public"));
app.use(
  "/api",
  proxy("http://localhost:3008", {
    proxyReqPathResolver: function (req) {
      console.log(req.url);
      return req.url;
    },
  })
);
app.get("*", (req, res) => {
  render(req, res);
});
var server = app.listen(3001, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("应用实例，访问地址为 http://%s:%s", host, port);
});
