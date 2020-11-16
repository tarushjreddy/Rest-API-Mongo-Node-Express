const express = require("express");
const app = express();
const Post = require("../models/post");
const mongoose = require("mongoose");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const postss = await Post.find();
    res.json(postss);
  } catch (err) {
    res.json({ message: err });
  }
});
router.post("/", (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  post
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});
router.get("/:postId", async (req, res) => {
  try {
    const postt = await Post.findById(req.params.postId);
    res.json(postt);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:postId", async (req, res) => {
  try {
    const removedpost = await Post.remove({ _id: req.params.postId });
    res.json(removedpost);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/cars", (req, res) => {
  res.send("we are carss");
});

router.patch("/:postId", async (req, res) => {
  try {
    const updatedpost = await Post.updateOne(
      { _id: req.params.postId },
      {
        $set: { title: req.body.title, description: req.body.description },
        //   { $set: { description: req.body.description }
      }
    );
    res.json(updatedpost);
  } catch (err) {
    res.json({ message: err });
  }
});
module.exports = router;
