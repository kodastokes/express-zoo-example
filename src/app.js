const { NODE_ENV = "development" } = process.env;
const express = require("express");
//const morgan = require("morgan");

const app = express();
const validateZip = require("./middleware/validateZip");
const getZoos = require("./utils/getZoos")

app.get("/check/:zip", validateZip, (req, res, next) => {
  const zip = req.params.zip
  const zoos = getZoos(zip)
  if (zoos){
    res.send(`${zip} exists in our records.`)
  } else (
    res.send(`${zip} does not exist in our records.`))
})

app.get("/zoos/all", (req, res, next) => {
  const zip = req.params.zip
  const zoos = getZoos()
  const adminCheck = req.query.admin
  if (adminCheck === "true"){
    res.send(`All zoos: ${zoos.join("; ")}`)
  } else {
    res.send("You do not have access to that route.")
  }
})

app.get("/zoos/:zip", validateZip, (req, res, next) => {
  const zip = req.params.zip
  const zoos = getZoos(zip)
  if (!zoos.length){
    res.send(`${zip} has no zoos.`)
  } else {
    res.send(`${zip} zoos: ${zoos.join("; ")}`)
  }
})

app.use((req, res, next) => {
  next("That route could not be found!");
});

app.use((err, req, res, next) => {
  err = err || "Internal server error!";
  res.send(err);
});

module.exports = app;