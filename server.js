const express = require("express");
const mongoose = require("mongoose");
const shortURL = require("./models/short");
const app = express();

mongoose.connect("mongodb://localhost/urlShortner", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/shortURL", async (req, res) => {
  await shortURL.create({
    full: req.body.input,
  });
  res.redirect("/");
});

app.listen(process.env.PORT || 5000);
