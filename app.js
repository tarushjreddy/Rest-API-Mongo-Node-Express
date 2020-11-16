const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const pass = require("./Routes/posts.js");
require("dotenv/config");
const bisyparde = require("body-parser");
app.use(cors());
app.use(bisyparde.json());
// app.use("/post", () => {
//   console.log("hello");
// });
app.get("/", (req, res) => {
  res.send("we are home");
});
app.use("/post", pass);
// app.get("/post", (req, res) => {
//   res.send("we are post");
// });
mongoose.connect(
  process.env.DB_CONNECTION,

  { usenewUrlParser: true },
  () => {
    console.log("connect to server");
  }
);
app.listen(3000);
