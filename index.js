const express = require("express");
const axios = require("axios");
const app = express();
const cors = require("cors");
app.use(cors());

app.get("/", async (req, res) => {
  try {
    const respose = await axios.get(
      "https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=C9acOwqH8Qb8Vzmj",

      res.status(200).json("respose")
    );
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
