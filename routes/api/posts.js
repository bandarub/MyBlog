const express = require("express");
const router = express.Router();

// const posts = require('../../public/data');

//Student Model
const Post = require("../../models/posts");

// Post.collection.insert(posts);

// @route GET posts
// @desc get all posts
// @access public
router.get("/", (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then(doc => {
      res.json(doc);
    });
});
router.get("/:id", (req, res) => {
  Post.findById(req.params.id).then(doc => {
    res.json(doc);
  });
});

// @route POST api/posts
// @desc add-post
// @access public

router.post("/", (req, res) => {
  const newPost = new Post({
    title: req.body.title,
    category: req.body.category,
    detail: req.body.detail
  });
  newPost
    .save()
    .then((post) => {
      res.json(post);
    })
    .catch(err => {
      res
        .status(err.status >= 100 && err.status < 600 ? err.code : 500)
        .send(err.message);
    });
});

//@route Delete api/posts/:id
//@desc delete a post
//@access public
router.delete("/:id", (req, res) => {
  Post.findByIdAndRemove(req.params.id, function(err) {
    if (err) return (err);
    res.send("Post deleted successfully!");
  });
});

//@route update api/posts/:id
//@desc update a post
//@access public
router.put("/:id/edit", (req, res) => {
  console.log(req.body)
  Post.findByIdAndUpdate(req.params.id, { $set: req.body }, function(
    err,
    post
  ) {
    if (err) throw err;
    res.json(post);
  });
});

module.exports = router;
