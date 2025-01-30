const express = require("express");
const app = express();

app.get("/", (req, res) => {
  try {
    res.status(200).json("Bienvenue Au PSG");
  } catch (error) {
    console.log(error.message);
  }
});
app.get("/personage", (req, res) => {
  try {
    console.log("OUIIIII");
    res.status(200).json("Personage !!!");
  } catch (error) {
    console.log(error.message);
  }
});

app.all("*", (req, res) => {
  try {
    res.status(400).json("Not Found");
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("SERVEUUUUR OOON");
});
