const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  console.log("someone entered the root route");
  res.send("ok");
});

app.listen(port, () => {
  console.log(`now listening at ${port}`);
});
