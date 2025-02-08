const express = require("express");
const axios = require("axios");
const app = express();
const cors = require("cors");
app.use(cors());

app.get("/", async (req, res) => {
  try {
  } catch (error) {
    console.log(error.message);
  }
});
app.get("/personage", async (req, res) => {
  try {
    console.log(req.query);
    const name = req.query.name || "";
    const limit = req.query.limit || 100;
    const skip = req.query.skip || 0;
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=C9acOwqH8Qb8Vzmj&name=${name}&limit=${limit}&skip=${skip}`
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.log(error.message);
  }
});
app.get("/personage/:id", async (req, res) => {
  try {
    const id = req.params.id;
    

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${id}?apiKey=C9acOwqH8Qb8Vzmj`
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.log(error.message);
  }
});
app.get("/comics", async (req, res) => {
  try {
    const title = req.query.title || "";
    const limit = req.query.limit || 100;
    const skip = req.query.skip || 0;
    const response = await axios.get(
      ` https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=C9acOwqH8Qb8Vzmj&title=${title}&limit=${limit}&skip=${skip}`
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.log(error.message);
  }
});
app.get("/comics/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);

    const response = await axios.get(
      ` https://lereacteur-marvel-api.herokuapp.com/comic/${id}?apiKey=C9acOwqH8Qb8Vzmj`
    );

    res.status(200).json(response.data);
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
