var express = require("express");
var app = express();
app.get("/mock/1", function (req, res) {
  res.send(`{
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
}`);
});
var server = app.listen(3008, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("应用实例，访问地址为 http://%s:%s", host, port);
});
