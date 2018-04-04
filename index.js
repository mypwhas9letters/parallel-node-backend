const express = require('express');

var app = express();

app.get("/",(req, res) => {
  res.send("hello This is a node server");
});

app.get("/test",(req, res) => {
  res.send(
    "<ul><h1>Testing Node Server</h1><li>Line 1</li><li>Line 2</li><li>Line 3</li></u>"
  );
});

app.listen(3000);
