const express = require("express");
const path = require("path");
const cors = require("cors");
const volleyball = require("volleyball");
const app = express();

// static middleware
app.use(express.static(path.join(__dirname, "..", "public")));

app.use(cors());
app.use(volleyball);

app.use(express.json());
app.use("/api", require("./api"));

app.all("*", (req, res) => {
  res.status(404).send("<h1>Sorry - we couldn't find that page!</h1><h2><a href=/>Return Home</a></h2>");
});

module.exports = app;
