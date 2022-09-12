const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("This is my express app");
});

app.get("/me", (req, res) => {
  res.send("Hi I am Rajat Singh");
});

app.listen(5000, () => {
  console.log("listening the port 5000");
});
