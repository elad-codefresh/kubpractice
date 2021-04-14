const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("hello");
  res.send("walla");
});

app.listen(4000, () => {
  console.log("now listening at 4000");
});
